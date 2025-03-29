import { Router } from "express";
import { userRoutes } from "../../Modules/Users/users.route";
import { studentsRouters1 } from "../../Modules/Students/studentroute";
import { AcademicSemistarRoutes } from "../../Modules/AcademicSemistar/AcademicSemistar.route";


const router=Router();

router.use('/users',userRoutes);
router.use('/students',studentsRouters1);
router.use('/academic-semistar',AcademicSemistarRoutes)

export default router