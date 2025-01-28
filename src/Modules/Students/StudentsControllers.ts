import { Request, Response } from "express";
import { StudentService } from "./StudentService";
import StudentZodvalidateSchema from "./student.validate";

// import studentJoiVAlidationSchema from "./students.validate";

// import StudentZodvalidateSchema from "./student.validate";


const crteateStudent=async(req:Request,res:Response)=>{
  try{

     
  

 

    const {student:studentData} =req.body;
    // const StudentZodVAlidateData=StudentZodvalidateSchema.parse(studentData);
    const ZodParseData=StudentZodvalidateSchema.parse(studentData);

    // const {error,value}=studentJoiVAlidationSchema.validate(studentData);
   
    const result =await StudentService.insertStudentIntoDb(ZodParseData);
    // const result =await StudentService.insertStudentIntoDb(studentData);
    // console.log("error",error,value)

    res.status(200).json({ 
        sucess:true,
        message:"user created  successfully",
        data:result
    })
  }
  catch(err){
    res.status(500).json({ 
      sucess:false ,
      message:"something went wrong ",
      data:err
  })
  }

}

// get all students controllers
const getAllStudents=async(req:Request,res:Response)=>{
try{
  const result=await StudentService.getAllStudentFroDb();

  res.status(200).json({
    sucess:true,
    message:"Data Retrive Sucessfully",
    data:result
  })

}
catch(err){
  console.log(err);
}

}


// get a single student controllers 

const getASingleStudent=async(req:Request,res:Response)=>{
try{
  const {studentID}=req.params;
  const result =await StudentService.getASingleStudentFromDb(studentID);
  res.status(200).json({
    sucess:true,
    messgage:"sucessfully get a single student from db",
    data:result
  })
}
catch(err){
  console.log(err)
}
}


export const StudentControllers={crteateStudent,getAllStudents,getASingleStudent}      