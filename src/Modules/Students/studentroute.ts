import express from 'express'

import { StudentControllers } from './StudentsControllers';

const router=express.Router();
//create 
router.post('/create-student',StudentControllers.crteateStudent);

//get 
router.get('/',StudentControllers.getAllStudents);
//router of  specific student
router.get('/:studentID',StudentControllers.getASingleStudent)

//delete 

router.delete('/:studentID',StudentControllers.deletedStudent)

export const studentsRouters1=router;