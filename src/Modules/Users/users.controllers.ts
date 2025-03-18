// import StudentZodvalidateSchema from "../Students/student.validate"
import { RequestHandler } from "express";
import { USerServices } from "./users.service";
import sendResponse from "../../app/utils/SendResponse";
import HttpStatus  from "http-status";

const createStudent:RequestHandler = async (req, res,next) => {
  try {
    const {password,student: studentData } = req.body;

    // const ZodParseData = StudentZodvalidateSchema.parse(studentData);

    const result = await USerServices.createStudentIntoDb(password,studentData);

    // res.status(200).json({
    //   sucess: true,
    //   message: "user created  successfully",
    //   data: result,
    // });

    sendResponse(res,{
      statusCode:HttpStatus.OK,
      success:true,
      message:"STUDENT IS CREATED SUCCESSFULLY",
      data:result
    })
  } catch (err) {
    // res.status(500).json({
    //   sucess: false,
    //   message: err.message || "something went wrong ",
    //   data: err,
    // });
    next(err)
  }
};

 
  export const usersControllers={
  createStudent
}
