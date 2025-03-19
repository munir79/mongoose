
import express from "express";
import { usersControllers } from "./users.controllers";
// import { AnyZodObject } from "zod";
import { StudentValidation } from "../Students/student.validate";
import validateRequest from "../../app/middelwares/ValidateRequest";
const router=express.Router();



router.post('/create-student',validateRequest(StudentValidation.StudentValidateSchema),usersControllers.createStudent)

export const userRoutes=router;