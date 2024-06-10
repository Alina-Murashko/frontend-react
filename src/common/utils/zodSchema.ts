import { z } from 'zod'

export const passwordValidationRegex = /^(?=.*[A-Z]).+$/

export const emailSchema = z
  .string()
  .min(1, { message: 'This field has to be filled.' })
  .email('This is not a valid email.')

export const passwordSchema = z
  .string()
  .min(4, { message: 'Password must be at least 4 characters' })
  .max(30, { message: 'The field must not contain more than 30 characters' })


