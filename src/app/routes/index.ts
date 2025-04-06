import { Router } from "express";
import { userRoutes } from "../../Modules/Users/users.route";
import { studentsRouters1 } from "../../Modules/Students/studentroute";
import { AcademicSemistarRoutes } from "../../Modules/AcademicSemistar/AcademicSemistar.route";
import { AcademicFacultyRouter } from "../../Modules/academicFaculty/AcademicFaculty.route";


const router=Router();

router.use('/users',userRoutes);
router.use('/students',studentsRouters1);
router.use('/academic-semistar',AcademicSemistarRoutes);
router.use('/academic-faculty',AcademicFacultyRouter);

export default router