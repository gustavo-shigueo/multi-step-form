import { object, string, boolean, type infer as Infer } from "zod"

export type FormSchema = Infer<typeof schemas[3]>

export const schemas = [
  object({
    name: string()
      .min(1, "This field is required")
      .min(3, "Name must contain at least 3 characters")
      .max(255, "Name must contain at most 255 characters"),
    email: string().min(1, "This field is required").email("Invalid e-mail"),
    phone: string().min(1, "This field is required"),
  }),

  object({
    plan: string({ message: "Please select a plan" })
      .min(1, "Please select a plan")
      .refine(
        x => x === "arcade" || x === "advanced" || x === "pro",
        { message: "Invalid plan", path: ["plan"] },
      ),
    subscription: string({ message: "Please select a subscription model" })
      .min(1, "Please select a subscription model")
      .refine(
        x => x === "monthly" || x === "yearly",
        { message: "Invalid subscription model", path: ["subscription"] },
      )
  }),

  object({
    onlineService: boolean(),
    largerStorage: boolean(),
    customizableProfile: boolean(),
  }),

  object({
    name: string()
      .min(1, "This field is required")
      .min(3, "Name must contain at least 3 characters")
      .max(255, "Name must contain at most 255 characters"),
    email: string().min(1, "This field is required").email("Invalid e-mail"),
    phone: string().min(1, "This field is required"),
    plan: string({ message: "Please select a plan" })
      .min(1, "Please select a plan")
      .refine(
        x => x === "arcade" || x === "advanced" || x === "pro",
        { message: "Invalid plan", path: ["plan"] },
      ),
    subscription: string({ message: "Please select a subscription model" })
      .min(1, "Please select a subscription model")
      .refine(
        x => x === "monthly" || x === "yearly",
        { message: "Invalid subscription model", path: ["subscription"] },
      ),
    onlineService: boolean(),
    largerStorage: boolean(),
    customizableProfile: boolean(),
  }),
] as const
