import express from 'express'

import { StudentControllers } from './StudentsControllers';

const router=express.Router();

router.post('/create-student',StudentControllers.crteateStudent);
router.get('/',StudentControllers.getAllStudents);

//router of  specific student
router.get('/:studentID',StudentControllers.getASingleStudent)

export const studentsRouters1=router;