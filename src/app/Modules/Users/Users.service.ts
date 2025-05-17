// import { StudentModel } from "../Students/Student.model";
import config from "../../config";
import { AcademicSemistarModel } from "../AcademicSemistar/Academicsemistar.model";
import { StudentModel } from "../Students/Student.model";
import { TStudent } from "../Students/Students.interface";
import { generatedStudenrId } from "./user.utils";
import {  Tuser } from "./Users.interface";
import { User } from "./Users.model";


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

    //year, semistarcode and 4 digit id 
    UserData.id= await generatedStudenrId(admissionSemestar)
   



    //create a UserData
    const NewUser=await User.create(UserData);


    // create a student 
    if(Object.keys(NewUser).length){
        // set id , _id as UserData 
     payLoad.id=NewUser.id;
     payLoad.user=NewUser._id;

     const newStudent=await StudentModel.create(payLoad);
     return newStudent;
     
    }



    // const result =await UserModel.create(payLoad);
}

export const UserService={
    createStudentIntoDb
}