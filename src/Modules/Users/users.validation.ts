import { z } from "zod";

 const userValidationSchema = z.object({
    // id: z.string().nonempty("ID is required"),
    password: z.string().min(6, "Password must be at least 6 characters long").optional(),
    // needPasswordChange: z.boolean().default(true),
    // role: z.enum(["admin", "student", "faculty"]),
    // status: z.enum(["inprogress", "blocked"]),
    // isDeleted: z.boolean().default(false),
});


export const userValidation={
    userValidationSchema
}