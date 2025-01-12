import { Student } from "./student.interface";
import { StudentMOdel } from "./students.model";



// insert student in database
const insertStudentIntoDb=async(student:Student)=>{
    const result=await StudentMOdel.create(student);
    return result;
}

//get all student from database
const getAllStudentFroDb=async()=>{
    const result=await StudentMOdel.find();
    return result;
}
// get a single student fro  database 
const getASingleStudentFromDb=async(id:string)=>{
    const result= await StudentMOdel.findOne({id});
    return result;
}


export const StudentService={insertStudentIntoDb,getAllStudentFroDb,getASingleStudentFromDb}