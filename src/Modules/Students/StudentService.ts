import { TStudent } from "./student.interface";
import { Student } from "./students.model";



// insert student in database
const insertStudentIntoDb=async(studentData:TStudent)=>{
    //1. const result=await StudentMOdel.create(student);   //built in static method 
    
    if(await Student.isUSerExists(studentData.id)){
        throw new Error("User Already exsist");
    }
    const result=await Student.create(studentData);   //built in static method 

   
    //2. now here i create a intance method 

    // const student =new Student(studentData);
     
    // if(await student.isUSerExists(studentData.id)){
    //     throw new Error("user already exsist")
    // }

    // const result=student.save()
    // return result;

    return result;
}

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