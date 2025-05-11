import express from 'express'
import { UserControllers } from './User.controllers';
// const router=express.Router();
const router=express.Router();

router.post('/create-student',UserControllers.createStudentControllers);

export const UserRouter=router;