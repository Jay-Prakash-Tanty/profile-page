import { z } from 'zod'
import { passwordRegex, fullNameRegex } from '@/constants/index'

const signupSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be atleast 3 characters")
    .max(50, "Full name must be less than 50 characters")
    .regex(fullNameRegex, "only uppercase, lowercase, space, hyphen(-), apostrophe (') are allowed"),
  email: z
    .string()
    .email("Invalid email address")
    .transform((val) => val.toLowerCase()),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(passwordRegex, "Password must contain at least one uppercase letter, one lowercase letter, and one special character")
});

const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .transform((val) => val.toLowerCase()),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(passwordRegex, "Password must contain at least one uppercase letter, one lowercase letter, and one special character")
});

export type SignupSchemaType = z.infer<typeof signupSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;

export { signupSchema, loginSchema };
