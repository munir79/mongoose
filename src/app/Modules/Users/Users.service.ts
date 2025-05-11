// import { StudentModel } from "../Students/Student.model";
import config from "../../config";
import { StudentModel } from "../Students/Student.model";
import { TStudent } from "../Students/Students.interface";
import {  Tuser } from "./Users.interface";
import { User } from "./Users.model";


const createStudentIntoDb=async(password:string ,StudentData:TStudent,)=>{


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
    // manually set generated id 

    UserData.id='203010001';

    //create a UserData
    const NewUser=await User.create(UserData);


    // create a student 
    if(Object.keys(NewUser).length){
        // set id , _id as UserData 
     StudentData.id=NewUser.id;
     StudentData.user=NewUser._id;

     const newStudent=await StudentModel.create(StudentData);
     return newStudent;
     
    }



    // const result =await UserModel.create(payLoad);
}

export const UserService={
    createStudentIntoDb
}