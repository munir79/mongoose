import catchAsync from "../../app/utils/catchAsync";
import  HttpStatus  from "http-status";
import sendResponse from "../../app/utils/SendResponse";
import { AcademicFacultyService } from "./AcademicFaculty.service";


// create Academic Faculty controlleres
const CreateAcademicFaculty=catchAsync(async(req,res)=>{
    const result=await AcademicFacultyService.createAcaDemicFacultyIntoDb(req.body);
    sendResponse(res,{
       statusCode:HttpStatus.OK,
        success:true,
        message:"Academic Faculty Created Sucessfully",
        data:result
})

})


// get all Academic Faculty Controllers 
const getAllAcademicFaculties=catchAsync(async(req,res)=>{
    const result=await AcademicFacultyService.getAllAcademicFacultyFromDb();
    sendResponse(res,{
        statusCode:HttpStatus.OK,
         success:true,
         message:"get all academic Faculty suceefully",
         data:result
 })


})


// get a  single Academic Faculty Controllers 


const getSingleAcademicFaculty=catchAsync(async(req,res)=>{
    const {facultyId}=req.params;
    const result=await AcademicFacultyService.getAsingleAcademicFacultyFromDb(facultyId);
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        success:true,
        message:'get a Single Academic Faculty sucessfully',
        data:result
    })
})


// update Academic Faculty  controllers 

const updateAcademicFaculty=catchAsync(async(req,res)=>{
    const {facultyId}=req.params;
    const result=await AcademicFacultyService.UpdateAcademicFacultyIntoDb(facultyId,req.body);
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        success:true,
        message:"Acdemic Facult updated Sucessfully",
        data:result
    })
})


export const AcademicFacultyControllers={
    CreateAcademicFaculty,getAllAcademicFaculties,
    getSingleAcademicFaculty,updateAcademicFaculty

}