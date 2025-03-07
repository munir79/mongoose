import express from 'express';
const router=express.Router();
router.post('/create-students',UserControllers.crteateStudent);

export const UserRoute=router;