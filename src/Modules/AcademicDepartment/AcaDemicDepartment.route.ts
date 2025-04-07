import express from "express";
import validateRequest from "../../app/middelwares/ValidateRequest";
import { AcademicDepartmentValidation } from "./AcaDemicDepartment.validation";
import { AcademicDepartmentControllers } from "./AcademicDepartmnet.controllers";

const router = express.Router();

router.post(
  "/create-academic-departmnet",
  validateRequest(
    AcademicDepartmentValidation.CreateAcademicDepartmnetValidationSchema
  ),
  AcademicDepartmentControllers.CreateAcademicDepartmnet
);

// get all

router.get("/", AcademicDepartmentControllers.getAllAcademicDepartmnet);

// get a single

router.get(
  "/:departmnetId",
  AcademicDepartmentControllers.getASingleAcademicDepartmnet
);

// update AcademicDepartmnet

router.patch(
  "/departmentId",
  validateRequest(AcademicDepartmentValidation.UpdateAcademicValidationSchema),
  AcademicDepartmentControllers.updateAcademicDepartmnet
);
