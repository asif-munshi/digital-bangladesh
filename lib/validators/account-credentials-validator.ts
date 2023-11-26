import { z } from 'zod'

export const AuthCredentialsValidator = z.object({
  email: z.string().email().min(1, { message: 'Email required' }),
  password: z
    .string()
    .min(8, { message: 'Password must be atleast 8 characters long.' }),
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>
