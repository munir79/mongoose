


import { z } from "zod";


const UserNameSchema = z.object({
  firstName: z
    .string()
    .max(20, "First name cannot exceed 20 characters")
    .trim()
    .nonempty("First name is required"),
  middleName: z
    .string()
    .max(10, "Middle name cannot exceed 10 characters")
    .nonempty("Middle name is required"),
  lastName: z
    .string()
    .max(15, "Last name cannot exceed 15 characters")
    .nonempty("Last name is required")
    .refine((val) => /^[A-Za-z]+$/.test(val), "Last name must contain only alphabets"),
});

// Define the Zod schema for Guardian
const GuardianSchema = z.object({
  fatherName: z
    .string()
    .max(20, "Father's name cannot exceed 20 characters")
    .nonempty("Father's name is required"),
  fatherOccupation: z
    .string()
    .max(10, "Father's occupation cannot exceed 10 characters")
    .nonempty("Father's occupation is required"),
  motherName: z.string().nonempty("Mother's name is required"),
  motherOccupation: z.string().nonempty("Mother's occupation is required"),
});

// Define the Zod schema for LocalGuardian
const LocalGuardianSchema = z.object({
  name: z.string().nonempty("Local guardian's name is required"),
  contactNumber: z
    .string()
    .nonempty("Contact number is required")
    .refine((val) => /^[0-9]+$/.test(val), "Contact number must be numeric"),
  occupation: z.string().nonempty("Occupation is required"),
});

// Define the Zod schema for Studenta
const StudentZodvalidateSchema = z.object({
  id: z.string().nonempty("ID is required"),
  password:z.string().max(20),
  name: UserNameSchema,
  gender: z.enum(["female", "male"],),
  contactNumber: z
    .string()
    .nonempty("Contact number is required")
    .refine((val) => /^[0-9]+$/.test(val), "Contact number must be numeric"),
  emergencyContactNumber: z
    .string()
    .nonempty("Emergency contact number is required")
    .refine((val) => /^[0-9]+$/.test(val), "Emergency contact number must be numeric"),
  guardian: GuardianSchema,
  presentAddress: z.string().nonempty("Present address is required"),
  permannetAddress: z.string().nonempty("Permanent address is required"),
  localGuardian: LocalGuardianSchema,
  profileImage: z.string().url("Profile image must be a valid URL"),
  isActive: z.enum(["active", "inactive"]),
 
  email: z
    .string()
    .email("Email must be a valid email address")
    .nonempty("Email is required"),
  avatar: z.string().optional(),
  // isDeleted: z.boolean()
});
// add 
export default   StudentZodvalidateSchema;
