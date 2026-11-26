import z from "zod";

export const registerschema=z.object({
    name: z.string().min(3,"Name must contain 3 letters"),
    email: z.string().email("Enter a Valie email"),
    password: z.string().min(6,"Password should be minimum 6 char"),
    age: z.coerce.number().min(18,"Age should be greater than 17")
})