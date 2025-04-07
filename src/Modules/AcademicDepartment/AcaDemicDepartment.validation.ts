import z from 'zod'

const CreateAcademicDepartmnetValidationSchema = z.object({
  body:z.object({
    name: z.string({
        invalid_type_error: 'Academic Departmrnt Must be String',
        required_error:'Name is Required',
    }),
    academicFaculty:z.string({
        invalid_type_error: 'Academic Faculty Must be String',
        required_error:'Faculty is Required'


    })
    
  })
})


const UpdateAcademicValidationSchema = z.object({
    body:z.object({
      name: z.string({
          invalid_type_error: 'Academic Departmrnt Must be String',
          required_error:'Name is Required',
      }).optional(),
      academicFaculty:z.string({
          invalid_type_error: 'Academic Faculty Must be String',
          required_error:'Faculty is Required'
  
  
      }).optional()
      
    })
  })

export const AcademicDepartmentValidation = { CreateAcademicDepartmnetValidationSchema,UpdateAcademicValidationSchema }
