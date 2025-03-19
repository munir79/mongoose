// import StudentZodvalidateSchema from "../Students/student.validate"
import { USerServices } from "./users.service";
import sendResponse from "../../app/utils/SendResponse";
import HttpStatus  from "http-status";
import catchAsync from "../../app/utils/catchAsync";

const createStudent=catchAsync( async (req, res,next) => {

  const {password,student: studentData } = req.body;

  // const ZodParseData = StudentZodvalidateSchema.parse(studentData);

  const result = await USerServices.createStudentIntoDb(password,studentData);
  sendResponse(res,{
    statusCode:HttpStatus.OK,
    success:true,
    message:"STUDENT IS CREATED SUCCESSFULLY",
    data:result
  })

})

 
  export const usersControllers={
  createStudent
}
