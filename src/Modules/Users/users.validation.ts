import { z } from 'zod';

export const userValidationSchema = z.object({
  id: z.string({
    required_error: 'ID is required',
  }),
  passWord: z.string({
    required_error: 'Password is required',
  }),
  needPasswordChange: z.boolean().default(true),
  role: z.enum(['admin', 'student', 'faculty'], {
    required_error: 'Role is required',
  }),
  status: z.enum(['in-progress', 'blocekd'], {
    required_error: 'Status is required',
  }),
  isDeleted: z.boolean().default(false),
});

// Example usage
// const exampleUser = {
//   id: 'user123',
//   passWord: 'securePassword123',
//   needPasswordChange: true,
//   role: 'admin',
//   status: 'in-progress',
//   isDeleted: false,
// };

// const validationResult = userValidationSchema.safeParse(exampleUser);
// console.log(validationResult);

export const userZodvalidation={
    userValidationSchema
}
