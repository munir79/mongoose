import { Router } from "express";
import { userRoutes } from "../../Modules/Users/users.route";
import { studentsRouters1 } from "../../Modules/Students/studentroute";
import { AcademicSemistarRoutes } from "../../Modules/AcademicSemistar/AcademicSemistar.route";
import { AcademicFacultyRouter } from "../../Modules/academicFaculty/AcademicFaculty.route";
import { AcaDemicDepartmentRoute } from "../../Modules/AcademicDepartment/AcaDemicDepartment.route";


const router=Router();

router.use('/users',userRoutes);
router.use('/students',studentsRouters1);
router.use('/academic-semistar',AcademicSemistarRoutes);
router.use('/academic-faculty',AcademicFacultyRouter);
router.use('/academic-departmnet',AcaDemicDepartmentRoute)

export default router