import { defineSchema, defineTable } from "convex/server";
import {v} from 'convex/values';




export default defineSchema ({
    users: defineTable ({
        email: v.string(),
        name: v.string(),
        image: v.optional (v.string()),
        clerkId: v.string(),
    }).index ("by_clerk_id", ["clerkId"]),

    plans: defineTable ({
        userId: v.string(),
        name: v.string(),
        workoutPlan: v.object({
            schedule: v.array(v.string()), // Isso já valida o número de dias
            exercise: v.array(
              v.object({
                day: v.string(),
                routines: v.array(
                  v.object({
                    name: v.string(),
                    sets: v.number(),
                    reps: v.number(),
                  })
                ),
              })
            ),
          }),

        dietPlan: v.object({
dailyCalories: v.number(),
meals: v.array(v.object({
    name: v.string(),
    foods: v.array(v.string())
}))
        }),
        isActive: v.boolean(),
    }).index("by_user_id", ["userId"])
    .index("by_active", ["isActive"]),
})