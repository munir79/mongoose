import { Request, Response } from "express";
import { StudentService } from "./StudentService";

// import studentJoiVAlidationSchema from "./students.validate";

// import StudentZodvalidateSchema from "./student.validate";

// get all students controllers
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentFroDb();

    res.status(200).json({
      sucess: true,
      message: "Data Retrive Sucessfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      sucess: false,
      message: err.message || "something went wrong ",
      data: err,
    });
  }
};

// get a single student controller

const getASingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;
    const result = await StudentService.getASingleStudentFromDb(studentID);
    res.status(200).json({
      sucess: true,
      messgage: "sucessfully get a single student from db",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      sucess: false,
      message: err.message || "something went wrong ",
      data: err,
    });
  }
};

const deletedStudent = async (req: Request, res: Response) => {
  try {
    const { StudentID } = req.params;
    const result = await StudentService.DeletedStudentFromDb(StudentID);
    res.status(200).json({
      sucess: true,
      message: "sucessfully data deleted ",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      sucess: false,
      message: err.message || "something went wrong ",
      data: err,
    });
  }
};

export const StudentControllers = {
  getAllStudents,
  getASingleStudent,
  deletedStudent,
};
