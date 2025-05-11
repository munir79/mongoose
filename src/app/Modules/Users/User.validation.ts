import { z } from "zod";

 const UserValidationSchema = z.object({
  id: z.string({
    required_error: "User ID is required",
  }),
  password: z.string({
    required_error: "Password is required",
  }).optional(),
//   needPasswordChange: z.boolean().optional(), // optional since default is true
//   role: z.enum(['admin', 'student', 'faculty'], {
//     required_error: "Role is required and must be one of: admin, student, faculty",
//   }),
//   status: z.enum(['in-progress', 'block'], {
//     required_error: "Status must be 'in-progress' or 'block'",
//   }),
//   isDeleted: z.boolean().optional(), // optional since default is false
});


export const UserValidation={UserValidationSchema}