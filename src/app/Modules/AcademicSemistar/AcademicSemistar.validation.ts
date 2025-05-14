import { z } from 'zod';

export const academicSemistarName = ['Auttum', 'Summer', 'Fall'] as const;
export const academicSemistarCode = ['01', '01', '03'] as const;
export const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

export const createAcademicSemisterZodSchema = z.object({
  body: z.object({
    name: z.enum(academicSemistarName, {
      required_error: 'Semester name is required',
    }),
    code: z.enum(academicSemistarCode, {
      required_error: 'Semester code is required',
    }),
    year: z.string({
      required_error: 'Year is required',
    }).refine((val) => !isNaN(Date.parse(val)), {
      message: 'Invalid date format',
    }),
    startMonth: z.enum(months, {
      required_error: 'Start month is required',
    }),
    endMonth: z.enum(months, {
      required_error: 'End month is required',
    }),
  }),
});
