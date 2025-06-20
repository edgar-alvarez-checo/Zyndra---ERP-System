import { z } from 'zod'

const createEmployeeSchema = z.object({ 
    userId: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string()
});

const updateEmployeeSchema = z.object({ 
    userId: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional()
});

export default { createEmployeeSchema, updateEmployeeSchema };
