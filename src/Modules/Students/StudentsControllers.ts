import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentService } from "./StudentService";
// import { promise } from "zod";

// import studentJoiVAlidationSchema from "./students.validate";

// import StudentZodvalidateSchema from "./student.validate";

// get all students controllers





const catchAsync=(fn:RequestHandler)=>{
return(req:Request,res:Response,next:NextFunction)=>{
  Promise.resolve( fn(req,res,next)).catch(err=>next(err));
}

}
  




const getAllStudents = async (req: Request, res: Response,next:NextFunction) => {
  
    const result = await StudentService.getAllStudentFroDb();

    res.status(200).json({
      sucess: true,
      message: "Data Retrive Sucessfully",
      data: result,
    });

};

// get a single student controller

const getASingleStudent =catchAsync( async (req, res,next) => {
  try {
    const { studentID } = req.params;
    const result = await StudentService.getASingleStudentFromDb(studentID);
    res.status(200).json({
      sucess: true,
      messgage: "sucessfully get a single student from db",
      data: result,
    });
  } catch (err) {
    // res.status(500).json({
    //   sucess: false,
    //   message: err.message || "something went wrong ",
    //   data: err,
    // });

    next(err);
  }
})

const deletedStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { StudentID } = req.params;
    const result = await StudentService.DeletedStudentFromDb(StudentID);
    res.status(200).json({
      sucess: true,
      message: "sucessfully data deleted ",
      data: result,
    });
  } catch (err) {
    // res.status(500).json({
    //   sucess: false,
    //   message: err.message || "something went wrong ",
    //   data: err,
    // });
    next(err)
  }
};

export const StudentControllers = {
  getAllStudents,
  getASingleStudent,
  deletedStudent,
};
