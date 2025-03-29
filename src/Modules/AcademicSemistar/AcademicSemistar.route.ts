import express from "express";
import { createAcademicSemistarControllers } from "./AcademicSemistart.controllers";
import validateRequest from "../../app/middelwares/ValidateRequest";
import { AcademicSemoistarValidations } from "./academicSemistar.validation";

const router = express.Router();

router.post(
  "/create-academic-semistar",
  validateRequest(
    AcademicSemoistarValidations.AcademicSemoistarValidationSchema
  ),
  createAcademicSemistarControllers.createAcademicSemistar
);
router.get('/',createAcademicSemistarControllers.getAllAcademicSemisatrt);


export const AcademicSemistarRoutes = router;
