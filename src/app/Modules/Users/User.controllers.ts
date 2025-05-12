// import { NextFunction, Request, Response } from "express";
import { UserService } from "./Users.service";
import sendResponse from "../../utils/SendResPonse";
import  HttpStatus  from "http-status";
import catchAsync from "../../utils/catchAsync";



const createStudentControllers= catchAsync (async(req,res,next)=>{

    // ********************************  Avoid Try catch*************************************
    // try{
    //     const {password, student:studentData}=req.body;
    // const result=await UserService.createStudentIntoDb(studentData,password);
    // // res.status(200).json({
    // //     sucess:true,
    // //     message:'create student sucessfully',
    // //     data:result
    // // })
    // sendResponse(res,{statusCode:HttpStatus.OK,
    //     sucess:true,
    //     message:"Student created Sucessfully",
    //     data:result

    // })
    // }
    // catch(err){
    //     next(err)
    // }

    // *************************************Avoid try catch ********************************************
     const {password, student:studentData}=req.body;
    const result=await UserService.createStudentIntoDb(studentData,password);
    sendResponse(res,{statusCode:HttpStatus.OK,
        sucess:true,
        message:"Student created Sucessfully",
        data:result

    })


})


export const UserControllers={
    createStudentControllers
}