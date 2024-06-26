import { z } from "zod";

export const personalInfoSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters long" }),
});

export const addressInfoSchema = z.object({
  addressLine1: z.string().min(1, { message: "Address Line 1 is required" }),
  addressLine2: z.string().optional(),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.string(),
});
