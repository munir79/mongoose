import express from 'express'
import ValidateRequest from '../../middleware/validateRequest';
import { FacultyValidation } from './AcademicFaculty.validation';
import { AcademicFacultyControllers } from './AcademicFaculty.controllers';
// const router=express.Router();
const router=express.Router();


router.post('/create-AcademicFaculty',ValidateRequest(FacultyValidation.CreateAcademicFacultyValidationSchema),AcademicFacultyControllers.CreateAcademicFacultyControllers);
router.get('/',AcademicFacultyControllers.getAllAcademicFacultiesControllers);
router.get("/:facultyId",AcademicFacultyControllers.getSingleAcademicFacultiesControllers);
router.patch("/:facultyid",ValidateRequest(FacultyValidation.UpdateAcademicFacultyValidationSchema),AcademicFacultyControllers.UpdateAcademicFacultiesControllers)

export const AcademicFacultyRoutet=router;