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


// get all Academic Semistar controller 

const getAllAcadenicSemistarControllers=catchAsync(async(req,res,next)=>{
    const result=await AcademicSemistarService.getAllAcademicSemistarFromDb();
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        sucess:true,
        message:'All Academic Semistar get Sucessfully',
        data:result
    })

})


// get SingleAcademic Semistar 

const getSingleAcademicSemistarControllers=catchAsync(async(req,res,next)=>{
    const {id}=req.params;
    const result=await AcademicSemistarService.getSingleAcademicSemistarFromDb(id);
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        sucess:true,
        message:"Single Academic Semistar fetched Sucessfully",
        data:result

    })

})

// updateAcademicSemistarControllers

const UpdateAcademicSemistarControllers=catchAsync(async(req,res,next)=>{
    const {id}=req.params;
    const updateData=req.body;
    const result=await AcademicSemistarService.UpdateAcademicSemistarFromDb(id,updateData);
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        sucess:true,
        message:"Academic Semistar Updated Sucessfully",
        data:result
    })
})

export const AcademicSemistarControllers={
    CreateAcademicSemistarControllers,
    getAllAcadenicSemistarControllers,
    getSingleAcademicSemistarControllers,
    UpdateAcademicSemistarControllers
}