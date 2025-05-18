import { z } from 'zod';

const CrtaeAcademicDepartmentValidationSchema = z.object({
body:z.object(
    {
          name: z.string({
    invalid_type_error: 'Academic Departmnrt must be string ',
    required_error:'Name is required '
  }),
  academicfaculty:z.string({
    invalid_type_error:'Academic Faculty Must be string',
    required_error:'Faculty is required '
    
  })
    }
)
});


const UpdateAcademicDepartmnetValidationScheama = z.object({
body:z.object(
    {
          name: z.string({
    invalid_type_error: 'Academic Departmnrt must be string ',
    required_error:'Name is required '
  }).optional(),
  academicfaculty:z.string({
    invalid_type_error:'Academic Faculty Must be string',
    required_error:'Faculty is required '
    
  }).optional()
    }
)
});

export const DepartMentValidation = { CrtaeAcademicDepartmentValidationSchema,UpdateAcademicDepartmnetValidationScheama };
