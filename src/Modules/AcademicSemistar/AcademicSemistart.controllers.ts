// import StudentZodvalidateSchema from "../Students/student.validate"
import sendResponse from "../../app/utils/SendResponse";
import HttpStatus  from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import { CreateAcademicSemistarService } from "./AcademicSemistart.service";

const createAcademicSemistar=catchAsync( async (req, res) => {

//   const {password,student: studentData } = req.body;

  // const ZodParseData = StudentZodvalidateSchema.parse(studentData);

  const result = await CreateAcademicSemistarService.createAcademicSemistarIntoDB(req.body);
  sendResponse(res,{
    statusCode:HttpStatus.OK,
    success:true,
    message:"AcademicSemisTar Create  sucessfully",
    data:result
  })

})


// end of Create Academic Semisata


//start get all Academic Semisatrt 


const getAllAcademicSemisatrt=catchAsync(async(req,res)=>{
  const result= await CreateAcademicSemistarService.getAllAcademicSemisTarServiceFromDb();
  sendResponse(res,{
    statusCode:HttpStatus.OK,
    success:true,
    message:"Academic Semistar are retrive sucessfully",
    data:result
  })


})

 
  export const createAcademicSemistarControllers={
  createAcademicSemistar,
  getAllAcademicSemisatrt
}
