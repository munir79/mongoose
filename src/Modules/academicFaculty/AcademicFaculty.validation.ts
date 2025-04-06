import z from 'zod'

const CreateAcademicFacultyValidationSchema = z.object({
  body:z.object({
    name: z.string({
        invalid_type_error: 'Academic Faculty Must be String',
    })
  })
})
const UpdateAcademicFacultyValidationSchema = z.object({
    name: z.string({
        invalid_type_error: 'Academic Faculty Must be String',
    })
})

export const AcademicFacultyValidation = { CreateAcademicFacultyValidationSchema,UpdateAcademicFacultyValidationSchema }
