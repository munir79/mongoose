import { Router } from "express";
import { userRoutes } from "../../Modules/Users/users.route";
import { studentsRouters1 } from "../../Modules/Students/studentroute";


const router=Router();

router.use('/users',userRoutes);
router.use('/students',studentsRouters1);

export default router