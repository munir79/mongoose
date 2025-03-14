// import StudentZodvalidateSchema from "../Students/student.validate"
import { Request, Response } from "express";
import { USerServices } from "./users.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const {password,student: studentData } = req.body;

    // const ZodParseData = StudentZodvalidateSchema.parse(studentData);

    const result = await USerServices.createStudentIntoDb(password,studentData);

    res.status(200).json({
      sucess: true,
      message: "user created  successfully",
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

 
  export const usersControllers={
  createStudent
}
