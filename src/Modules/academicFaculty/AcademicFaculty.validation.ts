import z from 'zod'

const AcademicFacultyValidationSchema = z.object({
    name: z.string({
        invalid_type_error: 'Academic Faculty Must be String',
    })
})

export const AcademicFacultyValidation = { AcademicFacultyValidationSchema }
