// import { NextFunction, Request, Response } from "express";
import  HttpStatus  from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/SendResPonse";
import { AcademicSemistarService } from "./AcademicSemistar.service";




const CreateAcademicSemistarControllers= catchAsync (async(req,res,next)=>{

  

    // *************************************Avoid try catch ********************************************
     const { student:studentData}=req.body;
    const result=await AcademicSemistarService.CreateAcademicSemistarIntoDb(studentData);
    sendResponse(res,{statusCode:HttpStatus.OK,
        sucess:true,
        message:"Student created Sucessfully",
        data:result

    })


})


export const AcademicSemistarControllers={
    CreateAcademicSemistarControllers
}