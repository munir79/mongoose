import config from "../../app/config";
import { TStudent } from "../Students/student.interface";
import { User } from "./users.model";
import { Tuser } from "./users.interface";
import { Student } from "../Students/students.model";
import { TAcademicSemistar } from "../AcademicSemistar/academicSemistar.interface";
// import { Student } from "../Students/students.model";


const createStudentIntoDb = async (password:string, studentData: TStudent) => {


const userData:Partial<Tuser>={}
userData.password =password || (config.defaultPassword as string);
userData.role='student'
// set manually id


//year semistar code 4 digit number 
// const genarateStudentId=(payLoad:TAcademicSemistar)




userData.id='201002050'
const NewUser = await User.create(userData);

//built in static method
// create a User 
if(Object.keys(NewUser).length){
    studentData.id=NewUser.id;
    studentData.user=NewUser._id

    const newStudent=await Student.create(studentData);
    return newStudent
  }

};


export const USerServices={
    createStudentIntoDb

}