import express from 'express'
import { createAcademicSemistarControllers } from './AcademicSemistart.controllers';
import validateRequest from '../../app/middelwares/ValidateRequest';
import { AcademicSemoistarValidations } from './academicSemistar.validation';


const router=express.Router();

router.post('/create-academic-semistar',validateRequest(AcademicSemoistarValidations.AcademicSemoistarValidationSchema) ,createAcademicSemistarControllers.createAcademicSemistar)
// //get 
// router.get('/',StudentControllers.getAllStudents);
// //router of  specific student
// router.get('/:studentID',StudentControllers.getASingleStudent)

// //delete 

// router.delete('/:studentID',StudentControllers.deletedStudent)

export const AcademicSemistarRoutes=router;