import z from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email(),
  password: z.string().min(8, "Too short"),
});

export type TNormalForm = z.infer<typeof SignUpSchema>;
