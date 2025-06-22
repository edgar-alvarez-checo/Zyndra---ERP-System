import { z } from "zod";

const createUserSchema = z.object({
    username: z.string().min(5).max(10),
    password: z.string().min(5).max(10),
    role: z.string()
    .transform((val) => val.toLowerCase())
    .refine((val) => ["admin", "employee"].includes(val), {
      message: "Role must be 'admin' or 'employee'"
    }) as z.ZodType<"admin" | "employee">
});

const updateUserSchema = z.object({
    username: z.string().min(5).max(10).optional(),
    password: z.string().min(5).max(10).optional(),
    role: z
    .string()
    .optional()
    .transform((val) => val?.toLowerCase())
    .refine((val) => val === undefined || ["admin", "employee"].includes(val), {
      message: "Role must be 'admin' or 'employee'"
    }) as z.ZodType<"admin" | "employee" | undefined>
});

export default { createUserSchema, updateUserSchema };
