import { z } from 'zod';

export const nameZodSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
});

export const guardianZodSchema = z.object({
  fatherName: z.string(),
  fatherOccupassion: z.string(),
  motherName: z.string(),
  motherOccupassion: z.string(),
});

export const localGuardianZodSchema = z.object({
  name: z.string(),
  occupassion: z.string(),
  contactNumber: z.string(),
  address: z.string(),
});

export const studentZodSchema = z.object({
  id: z.string(),
  name: nameZodSchema,
  gender: z.enum(['male', 'female']),
  email: z.string().email(),
  dateOfBirth: z.string(),
  constactNumber: z.string(),
  emergencyContactNumber: z.string(),
  bloodGroup: z.enum(['A+', 'A-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianZodSchema,
  localGuardian: localGuardianZodSchema,
  profileImg: z.string().url(),
});
export const StudentValidationSchema={
    studentZodSchema
}