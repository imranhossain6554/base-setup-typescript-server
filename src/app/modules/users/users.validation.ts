import { z } from 'zod';

const createUserZodSchema = z.object({
  user: z.object({
    name: z.string(),
    role: z.string({
      required_error: 'role is required!!',
    }),
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
