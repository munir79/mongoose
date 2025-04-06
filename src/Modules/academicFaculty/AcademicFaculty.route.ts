import express from "express";
import validateRequest from "../../app/middelwares/ValidateRequest";
import { AcademicFacultyValidation } from "./AcademicFaculty.validation";
import { AcademicFacultyControllers } from "./academicFaculty.controllers";
import { AcademicSemoistarValidations } from "../AcademicSemistar/academicSemistar.validation";
const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidation.CreateAcademicFacultyValidationSchema
  ),
  AcademicFacultyControllers.CreateAcademicFaculty
);

// get a single academic FacultyControllers route

router.get("/:facultyId", AcademicFacultyControllers.getAllAcademicFaculties);

// updateAcademicFacultyControllers

router.patch(
  "/:facultyID",
  validateRequest(
    AcademicSemoistarValidations.UpdateAcademicSemoistarValidationSchema
  ),
  AcademicFacultyControllers.updateAcademicFaculty
);


// router get  all AcademicFaculty Controllers 

router.get('/',AcademicFacultyControllers.getAllAcademicFaculties)


export const AcademicFacultyRouter=router;