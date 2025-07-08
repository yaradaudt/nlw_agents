import { z } from 'zod'
import { config } from 'dotenv'

config()

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.string().url().startsWith('postgresql://'),
})

export const env = envSchema.parse(process.env)