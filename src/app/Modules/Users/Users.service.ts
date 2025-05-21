// import { StudentModel } from "../Students/Student.model";
import mongoose from "mongoose";
import config from "../../config";
import { AcademicSemistarModel } from "../AcademicSemistar/Academicsemistar.model";
import { StudentModel } from "../Students/Student.model";
import { TStudent } from "../Students/Students.interface";
import { generatedStudenrId } from "./user.utils";
import {  Tuser } from "./Users.interface";
import { User } from "./Users.model";
import { error } from "console";


const createStudentIntoDb=async(password:string ,payLoad:TStudent,)=>{


    //create a user object 
    const UserData:Partial<Tuser>={};
    // if(!password){
    //    UserData.password=config.defaultPassword as string
    // }else{
    //     UserData.password=password
    // }

    UserData.password=password || (config.defaultPassword as string)


    // set Student role

    UserData.role='student';
    const admissionSemestar=await AcademicSemistarModel.findById(payLoad.addmissionSemistar)

    // manually set generated id 


    //*********************************************************** */ transaction and roolback ***********************************************************************************
    const session =await mongoose.startSession()
   
try{
    session.startTransaction()
     //year, semistarcode and 4 digit id 
    UserData.id= await generatedStudenrId(admissionSemestar)
   



    //create a UserData(transaction1)
    const NewUser=await User.create([UserData],{session});


    // create a student 
    if(!NewUser.length){
      throw new Error("failed to create user")
     
    }
      // set id , _id as UserData 
     payLoad.id=NewUser[0].id;
     payLoad.user=NewUser[0]._id;

     const newStudent=await StudentModel.create(payLoad);
     return newStudent;

}
catch(err){

}









    // ****************************************************** transaction and roolback end *************************************************************************************
   



    // const result =await UserModel.create(payLoad);
}

export const UserService={
    createStudentIntoDb
}