import express from 'express'
import { UserControllers } from './User.controllers';
import { StudentValidationSchema } from '../Students/Student.validation';
import ValidateRequest from '../../middleware/validateRequest';
// const router=express.Router();
const router=express.Router();


router.post('/create-student',ValidateRequest(StudentValidationSchema.studentZodSchema), UserControllers.createStudentControllers);

export const UserRouter=router;