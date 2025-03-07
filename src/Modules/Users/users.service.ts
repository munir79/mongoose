import { User } from "./users.model";

// insert student in database
const insertStudentIntoDb=async(studentData:TStudent)=>{
    //1. const result=await StudentMOdel.create(student);   //built in static method 
    
    // if(await Student.isUSerExists(studentData.id)){
    //     throw new Error("User Already exsist");
    // }
    const result=await User.create(studentData);   //built in static method 

   
    //2. now here i create a intance method 

    // const student =new Student(studentData);
     
    // if(await student.isUSerExists(studentData.id)){
    //     throw new Error("user already exsist")
    // }

    // const result=student.save()
    // return result;

    return result;
}

export const Userservice={
    insertStudentIntoDb
}