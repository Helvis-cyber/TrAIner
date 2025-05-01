import { httpRouter } from "convex/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { api } from "./_generated/api";
import { httpAction } from "./_generated/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

type Routine = {
  name: string;
  sets: number;
  reps: number;
  description?: string; // Propriedade opcional
};

const http = httpRouter();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request): Promise<Response> => {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("Missing CLERK_WEBHOOK_SECRET environment variable");
    }

    const svix_id = request.headers.get("svix-id");
    const svix_signature = request.headers.get("svix-signature");
    const svix_timestamp = request.headers.get("svix-timestamp");

    if (!svix_id || !svix_signature || !svix_timestamp) {
      return new Response("No svix headers found", {
        status: 400,
      });
    }

    const payload = await request.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(webhookSecret);
    let evt: WebhookEvent;

    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return new Response("Error occurred", { status: 400 });
    }

    const eventType = evt.type;

    if (eventType === "user.created") {
      const { id, first_name, last_name, image_url, email_addresses } = evt.data;

      const email = email_addresses[0].email_address;

      const name = `${first_name || ""} ${last_name || ""}`.trim();

      try {
        await ctx.runMutation(api.users.syncUser, {
          email,
          name,
          image: image_url,
          clerkId: id,
        });
      } catch (error) {
        console.log("Error creating user:", error);
        return new Response("Error creating user", { status: 500 });
      }
    }

    if (eventType === "user.updated") {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data;

      const email = email_addresses[0].email_address;
      const name = `${first_name || ""} ${last_name || ""}`.trim();

      try {
        await ctx.runMutation(api.users.updateUser, {
          clerkId: id,
          email,
          name,
          image: image_url,
        });
      } catch (error) {
        console.log("Error updating user:", error);
        return new Response("Error updating user", { status: 500 });
      }
    }

    return new Response("Webhooks processed successfully", { status: 200 });
  }),
});


function validateWorkoutPlan(plan: any) {
  const validatedPlan = {
    schedule: plan.schedule,
    exercise: plan.exercises.map((exercise: any) => ({
      day: exercise.day,
      routines: exercise.routines.map((routine: any) => ({
        name: routine.name,
        sets: typeof routine.sets === "number" ? routine.sets : parseInt(routine.sets) || 1,
        reps: typeof routine.reps === "number" ? routine.reps : parseInt(routine.reps) || 10,
        description: routine.description,
      })),
    })),
  };
  return validatedPlan;
}


function validateDietPlan(plan: any) {
  
  const validatedPlan = {
    dailyCalories: plan.dailyCalories,
    meals: plan.meals.map((meal: any) => ({
      name: meal.name,
      foods: meal.foods,
    })),
  };
  return validatedPlan;
}

http.route({
  path: "/vapi/generate-program",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const payload = await request.json();
      console.log("Payload recebido:", payload);

      
      const user_id = payload.user_id?.trim();
      if (!user_id) {
        throw new Error("O campo 'user_id' é obrigatório.");
      }

      const workoutDaysInput = payload["dias de treino"]?.toString()?.trim();
      if (!workoutDaysInput) {
        throw new Error("O campo 'dias de treino' é obrigatório e não pode estar vazio.");
      }

      const workoutDays = parseWorkoutDays(workoutDaysInput);

      function parseWorkoutDays(input: string): number {
        const days = parseInt(input);
        if (isNaN(days) || days < 1 || days > 7) {
          throw new Error("O campo 'dias de treino' deve ser um número entre 1 e 7.");
        }
        return days;
      }

      const age = payload.idade ? parseInt(payload.idade) : null;
      const height = payload.altura ? parseFloat(payload.altura.replace(',', '.')) : null;
      const weight = payload.peso ? parseFloat(payload.peso.replace(' kg', '').replace(',', '.')) : null;

      if (!age || !height || !weight) {
        throw new Error("Os campos 'idade', 'altura' e 'peso' são obrigatórios e não podem estar vazios.");
      }

      const injuries = payload.doencas?.trim() || "Nenhuma";
      const fitness_goal = payload.objetivo?.trim() || "Melhorar condicionamento físico";
      const fitness_level = payload.nivel?.trim() || "Iniciante";
      const dietary_restrictions = payload["restrições alimentares"]?.trim() || "Nenhuma";

      const userData = {
        user_id,
        age,
        height,
        weight,
        injuries,
        workout_days: workoutDays,
        fitness_goal,
        fitness_level,
        dietary_restrictions,
      };

      console.log("Dados normalizados:", userData);

      // Configuração do modelo Gemini
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro-latest", 
        generationConfig: {
          temperature: 0.3, 
          topP: 0.7, 
          topK: 40, 
          maxOutputTokens: 4000, 
          responseMimeType: "application/json",
        },
      });

      // Prompt para o plano de treino
      const weekDays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"].slice(0, workoutDays);
      const workoutPrompt = `
      ## INSTRUÇÕES OBRIGATÓRIAS ##
      Você DEVE criar um plano de EXATAMENTE ${userData.workout_days} dias.
      NÃO PODE SER MENOS NEM MAIS QUE ${userData.workout_days} DIAS.

      Dados do usuário:
      - Objetivo: ${userData.fitness_goal}
      - Nível: ${userData.fitness_level}
      - Dias solicitados: ${userData.workout_days}
      - Restrições: ${userData.injuries}

      REGRAS ABSOLUTAS:
      1. Número de dias: ${userData.workout_days} EXATOS
      2. Formato: Apenas JSON válido
      3. Cada dia deve ter 4-6 exercícios
      4. Sets/reps devem ser números (nada como "30 segundos")

      ESTRUTURA EXATA REQUERIDA:
      {
        "schedule": ${JSON.stringify(weekDays)},
        "exercises": [
          {
            "day": "Segunda",
            "routines": [
              {
                "name": "Nome do exercício",
                "sets": 3,
                "reps": 10
              }
            ]
          }
        ]
      }`;

      console.log("Prompt enviado ao Gemini:", workoutPrompt);

      const workoutResult = await model.generateContent(workoutPrompt);
      const workoutPlanText = await workoutResult.response.text();

      let workoutPlan = JSON.parse(workoutPlanText);
      workoutPlan = validateWorkoutPlan(workoutPlan);

      // Prompt para o plano alimentar
      const dietPrompt = `
      Crie um plano alimentar para:
      - Objetivo: ${userData.fitness_goal}
      - Restrições: ${userData.dietary_restrictions}
      - Calorias diárias: Adequadas ao objetivo

      FORMATO OBRIGATÓRIO:
      {
        "dailyCalories": 2000,
        "meals": [
          {
            "name": "Refeição",
            "foods": ["Item1", "Item2"]
          }
        ]
      }`;

      const dietResult = await model.generateContent(dietPrompt);
      const dietPlanText = await dietResult.response.text();

      let dietPlan = JSON.parse(dietPlanText);
      dietPlan = validateDietPlan(dietPlan);

      // Salvar no banco de dados
      const planId = await ctx.runMutation(api.plans.createPlan, {
        userId: userData.user_id,
        dietPlan,
        isActive: true,
        workoutPlan,
        name: `${userData.fitness_goal} (${userData.workout_days}d/sem) - ${new Date().toLocaleDateString("pt-BR")}`,
      });

      return new Response(
        JSON.stringify({
          success: true,
          data: {
            planId,
            workoutPlan,
            dietPlan,
          },
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.error("Erro no endpoint:", error);
      return new Response(
        JSON.stringify({
          success: false,
          error: error instanceof Error ? error.message : "An unknown error occurred",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }),
});

export default http;