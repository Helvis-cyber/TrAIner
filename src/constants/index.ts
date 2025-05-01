export const USER_PROGRAMS = [
  {
    id: 1,
    first_name: "Miguel",
    profilePic: "https://randomuser.me/api/portraits/men/74.jpg",
    fitness_goal: "Perda de Peso",
    height: "1,68 m",
    weight: "75 kg",
    age: 34,
    workout_days: 4,
    injuries: "Dor na parte inferior das costas",
    fitness_level: "Iniciante",
    equipment_access: "Academia em casa",
    dietary_restrictions: "Intolerante à lactose",
    workout_plan: {
      title: "Programa para Iniciantes - Perda de Peso",
      weekly_schedule: [
        { day: "Segunda-feira", focus: "Cardio Corpo Inteiro", duration: "30 min" },
        { day: "Quarta-feira", focus: "Core e Parte Inferior do Corpo", duration: "30 min" },
        { day: "Sexta-feira", focus: "Treino HIIT", duration: "25 min" },
        { day: "Sábado", focus: "Recuperação Ativa", duration: "40 min" },
      ],
      description:
        "Este programa foca na construção de um hábito de exercício consistente com movimentos que não prejudicam as articulações e protegem a sua lombar. A combinação de cardio e treino de força auxilia na perda de peso, preservando a massa muscular.",
    },
    diet_plan: {
      title: "Plano Nutricional Balanceado (Sem Lactose)",
      daily_calories: "1.600 calorias",
      macros: { protein: "30%", carbs: "40%", fats: "30%" },
      meal_examples: [
        { meal: "Café da Manhã", example: "Aveia com leite de amêndoa, frutas vermelhas e sementes de chia" },
        { meal: "Almoço", example: "Salada de frango grelhado com azeite de oliva" },
        { meal: "Jantar", example: "Salmão assado com quinoa e vegetais assados" },
        { meal: "Lanches", example: "Maçã com pasta de amendoim, iogurte sem lactose com castanhas" },
      ],
      description:
        "Este plano alimentar evita produtos lácteos, fornecendo nutrição balanceada para apoiar os objetivos de perda de peso. O foco é em alimentos integrais com proteína adequada para preservar os músculos durante a perda de peso.",
    },
  },
  {
    id: 2,
    first_name: "Michael",
    profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
    fitness_goal: "Ganho de Massa Muscular",
    height: "1,78 m",
    weight: "77 kg",
    age: 28,
    workout_days: 5,
    injuries: "Nenhuma",
    fitness_level: "Intermediário",
    equipment_access: "Academia completa",
    dietary_restrictions: "Nenhuma",
    workout_plan: {
      title: "Construção Muscular com Foco em Hipertrofia",
      weekly_schedule: [
        { day: "Segunda-feira", focus: "Peito e Tríceps", duration: "45 min" },
        { day: "Terça-feira", focus: "Costas e Bíceps", duration: "45 min" },
        { day: "Quarta-feira", focus: "Recuperação/Cardio", duration: "30 min" },
        { day: "Quinta-feira", focus: "Ombros e Abdômen", duration: "45 min" },
        { day: "Sexta-feira", focus: "Pernas", duration: "50 min" },
      ],
      description:
        "Este programa implementa uma divisão tradicional por grupo muscular com ênfase na sobrecarga progressiva. Cada grupo muscular é treinado com volume moderado e recuperação adequada para maximizar o crescimento muscular.",
    },
    diet_plan: {
      title: "Plano Nutricional para Ganho Muscular",
      daily_calories: "2.800 calorias",
      macros: { protein: "30%", carbs: "50%", fats: "20%" },
      meal_examples: [
        { meal: "Café da Manhã", example: "Aveia proteica com banana e whey protein" },
        { meal: "Almoço", example: "Frango, arroz e vegetais com azeite de oliva" },
        { meal: "Jantar", example: "Bife com batata doce e vegetais verdes" },
        { meal: "Lanches", example: "Shake de proteína com fruta, iogurte grego com mel" },
      ],
      description:
        "Esta dieta rica em proteínas e com superávit calórico apoia o crescimento muscular, minimizando o ganho de gordura. Os carboidratos são programados em torno dos treinos para otimizar o desempenho e a recuperação.",
    },
  },
  {
    id: 3,
    first_name: "Julio",
    profilePic: "https://randomuser.me/api/portraits/men/76.jpg",
    fitness_goal: "Condicionamento Físico Geral",
    height: "1,63 m",
    weight: "59 kg",
    age: 45,
    workout_days: 3,
    injuries: "Dor no joelho",
    fitness_level: "Intermediário",
    equipment_access: "Peso corporal apenas",
    dietary_restrictions: "Vegetariano",
    workout_plan: {
      title: "Programa de Fitness Funcional",
      weekly_schedule: [
        { day: "Segunda-feira", focus: "Força com Peso Corporal", duration: "40 min" },
        { day: "Quarta-feira", focus: "Mobilidade e Equilíbrio", duration: "35 min" },
        { day: "Sábado", focus: "Cardio e Core", duration: "40 min" },
      ],
      description:
        "Este programa foca em padrões de movimento funcionais que melhoram o desempenho diário, sendo gentil com os joelhos. A ênfase está na força do core, mobilidade e saúde cardiovascular.",
    },
    diet_plan: {
      title: "Nutrição Vegetariana Balanceada",
      daily_calories: "1.800 calorias",
      macros: { protein: "25%", carbs: "50%", fats: "25%" },
      meal_examples: [
        { meal: "Café da Manhã", example: "Tofu mexido com vegetais e torradas integrais" },
        { meal: "Almoço", example: "Sopa de lentilha com salada de folhas verdes" },
        { meal: "Jantar", example: "Curry de grão de bico com arroz integral e vegetais" },
        { meal: "Lanches", example: "Mix de castanhas, hummus com vegetais, smoothie de proteína" },
      ],
      description:
        "Este plano alimentar vegetariano garante a ingestão adequada de proteínas de fontes vegetais. Ele se concentra em alimentos integrais e apoia seu estilo de vida ativo, enquanto acomoda problemas no joelho com escolhas alimentares anti-inflamatórias.",
    },
  },
];