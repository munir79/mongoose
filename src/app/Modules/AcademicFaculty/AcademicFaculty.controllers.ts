import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/SendResPonse";
import { FacultyServices } from "./Faculty.service";
import  HttpStatus from "http-status";





const CreateAcademicFacultyControllers= catchAsync (async(req,res,next)=>{

  

    // *************************************Avoid try catch ********************************************
     const { student:studentData}=req.body;
    const result=await FacultyServices.CreateAcademicFacultyIntoDb(studentData);
    sendResponse(res,{statusCode:HttpStatus.OK,
        sucess:true,
        message:"Student created Sucessfully",
        data:result

    })


})


// get all Academic Semistar controller 

const getAllAcademicFacultiesControllers=catchAsync(async(req,res,next)=>{
    const result=await FacultyServices.getAllAcademicFacultiesFromDb();
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        sucess:true,
        message:'All Academic Faculties  get Sucessfully',
        data:result
    })

})


// get SingleAcademic Semistar 

const getSingleAcademicFacultiesControllers=catchAsync(async(req,res,next)=>{
    const {facultyId}=req.params;
    const result=await FacultyServices.getSingleAcademicFacultyFromDb(facultyId);
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        sucess:true,
        message:"Single Academic Faculties fetched Sucessfully",
        data:result

    })

})

// updateAcademicSemistarControllers

const UpdateAcademicFacultiesControllers=catchAsync(async(req,res,next)=>{
    const {facultyId}=req.params;
    const updateData=req.body;
    const result=await FacultyServices.UpdateAcademicFacultyIntoDb(facultyId,updateData);
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        sucess:true,
        message:"Academic Faculty Updated Sucessfully",
        data:result
    })
})

export const AcademicFacultyControllers={
   CreateAcademicFacultyControllers,
   getAllAcademicFacultiesControllers,
   getSingleAcademicFacultiesControllers,
   UpdateAcademicFacultiesControllers
}