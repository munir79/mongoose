import express from 'express'
import ValidateRequest from '../../middleware/validateRequest';
import { DepartMentValidation } from './AcademicDepartmnet.validation';
import { AcademicDepartmnetControllers } from './DepartMentControllers';
import { AcademicFacultyControllers } from '../AcademicFaculty/AcademicFaculty.controllers';
// const router=express.Router();
const router=express.Router();


router.post('/cretae-departmnet',ValidateRequest(DepartMentValidation.CrtaeAcademicDepartmentValidationSchema),AcademicDepartmnetControllers.CreateAcademicDepartmnetControllers);
router.get('/',AcademicDepartmnetControllers.getAllAcademicDepartmnetControllers);
router.get("/:departmnetId",AcademicDepartmnetControllers.getSingleAcademicDepartmentControllers);
router.patch("/:departmnetId",ValidateRequest(DepartMentValidation.UpdateAcademicDepartmnetValidationScheama),AcademicFacultyControllers.UpdateAcademicFacultiesControllers)

export const AcademicDepartmentRoute=router;