// import { TStudent } from "./student.interface";
import { Student } from "./students.model";





//get all student from database
const getAllStudentFroDb=async()=>{
    const result=await Student.find();
    return result;
}
// get a single student fro  database 
const getASingleStudentFromDb=async(id:string)=>{
    const result= await Student.findOne({id});
    return result;
}

const DeletedStudentFromDb=async(id:string)=>{
    const result= await Student.updateOne({id},{isDeleted:true});
    return result;
}


export const StudentService={insertStudentIntoDb,getAllStudentFroDb,getASingleStudentFromDb,
    DeletedStudentFromDb
}