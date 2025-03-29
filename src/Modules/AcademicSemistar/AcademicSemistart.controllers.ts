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




//***********************************start get all Academic Semisatr ***************************************************
const getAllAcademicSemisatrt=catchAsync(async(req,res)=>{
  const result= await CreateAcademicSemistarService.getAllAcademicSemisTarServiceFromDb();
  sendResponse(res,{
    statusCode:HttpStatus.OK,
    success:true,
    message:"Academic Semistar are retrive sucessfully",
    data:result
  })
})


//********************************* */ end get all Academic Semistar ************************************************

// ---------------------------------------start a single Academsic Semistar-------------------------------

const getASingleAcademicSemistar =catchAsync(async(req,res)=>{
  const {semistarId}=req.params;
  const result=await CreateAcademicSemistarService.getSingleSemistarServiceFromDb(semistarId);

  sendResponse(res,{
    statusCode:HttpStatus.OK,
    success:true,
    message:'get a single academic semistar sucessfully',
    data:result
  })

})





 
  export const createAcademicSemistarControllers={
  createAcademicSemistar,
  getAllAcademicSemisatrt,
  getASingleAcademicSemistar
}
