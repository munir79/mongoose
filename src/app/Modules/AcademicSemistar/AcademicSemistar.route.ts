import express from 'express'
import { AcademicSemistarControllers } from './AcademicSemistar.controllers';
// const router=express.Router();
const router=express.Router();


router.post('/create-student',AcademicSemistarControllers.CreateAcademicSemistarControllers);

export const AcademicSemistarRoute=router;