import { StudentModel } from "./Student.model";
import { TStudent } from "./Students.interface";


const createStudentIntoDb=async(payLoad:TStudent)=>{
    const result =await StudentModel.create(payLoad);
    return result;
}

export const studentService={
    createStudentIntoDb
}