import express from 'express'
import { AcademicSemistarControllers } from './AcademicSemistar.controllers';
// const router=express.Router();
const router=express.Router();


router.post('/create-student',AcademicSemistarControllers.CreateAcademicSemistarControllers);
router.get('/',AcademicSemistarControllers.getAllAcadenicSemistarControllers);
router.get("/:id",AcademicSemistarControllers.getSingleAcademicSemistarControllers);
router.patch("/:id",AcademicSemistarControllers.UpdateAcademicSemistarControllers)

export const AcademicSemistarRoute=router;