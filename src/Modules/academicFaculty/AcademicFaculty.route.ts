import express from "express";
import validateRequest from "../../app/middelwares/ValidateRequest";
import { AcademicFacultyValidation } from "./AcademicFaculty.validation";
import { AcademicFacultyControllers } from "./academicFaculty.controllers";
const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidation.CreateAcademicFacultyValidationSchema
  ),
  AcademicFacultyControllers.CreateAcademicFaculty
);

// get a single academic FacultyControllers route

router.get("/:facultyId", AcademicFacultyControllers.getSingleAcademicFaculty);

// updateAcademicFacultyControllers

router.patch(
  "/:facultyId",
  validateRequest(
   AcademicFacultyValidation.UpdateAcademicFacultyValidationSchema
  ),
  AcademicFacultyControllers.updateAcademicFaculty
);


// router get  all AcademicFaculty Controllers 

router.get('/',AcademicFacultyControllers.getAllAcademicFaculties)


export const AcademicFacultyRouter=router;