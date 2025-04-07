
import  HttpStatus  from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import { AcademicDepartMentService } from "./AcademicDepartment.service";
import sendResponse from "../../app/utils/SendResponse";




// create Academic Departmnet controlleres
const CreateAcademicDepartmnet=catchAsync(async(req,res)=>{
    const result=await AcademicDepartMentService.createAcaDemicDepartmentIntoDb(req.body);
    sendResponse(res,{
       statusCode:HttpStatus.OK,
        success:true,
        message:"Academic Faculty Created Sucessfully",
        data:result
})

})


// get all Academic Faculty Controllers 
const getAllAcademicDepartmnet=catchAsync(async(req,res)=>{
    const result=await AcademicDepartMentService.getAllAcademicDepartment();
    sendResponse(res,{
        statusCode:HttpStatus.OK,
         success:true,
         message:"get all academic Faculty suceefully",
         data:result
 })


})


// get a  single Academic Faculty Controllers 


const getASingleAcademicDepartmnet=catchAsync(async(req,res)=>{
    const {DepartmnetyId}=req.params;
    const result=await AcademicDepartMentService.getASingleAcademicDepartmnet(DepartmnetyId);
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        success:true,
        message:'get a Single Academic Faculty sucessfully',
        data:result
    })
})


// update Academic Faculty  controllers 

const updateAcademicDepartmnet=catchAsync(async(req,res)=>{
    const {facultyId}=req.params;
    const result=await AcademicDepartMentService.UpdateAcademicDeparmnet(facultyId,req.body);
    sendResponse(res,{
        statusCode:HttpStatus.OK,
        success:true,
        message:"Acdemic Facult updated Sucessfully",
        data:result
    })
})


export const AcademicFacultyControllers={
    CreateAcademicDepartmnet,getAllAcademicDepartmnet,getASingleAcademicDepartmnet,updateAcademicDepartmnet

}