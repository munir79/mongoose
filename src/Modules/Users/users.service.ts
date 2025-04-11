import config from "../../app/config";
import { TStudent } from "../Students/student.interface";
import { User } from "./users.model";
import { Tuser } from "./users.interface";
import { Student } from "../Students/students.model";
import { TAcademicSemistar } from "../AcademicSemistar/academicSemistar.interface";
import { AcademicSemistar } from "../AcademicSemistar/acdemicSemistar.model";
import { generateStudentId } from "./user.utils";
// import { TAcademicSemistar } from "../AcademicSemistar/academicSemistar.interface";
// import { Student } from "../Students/students.model";


const createStudentIntoDb = async (password:string, payload: TStudent) => {


const userData:Partial<Tuser>={}
userData.password =password || (config.defaultPassword as string);
userData.role='student'
// set manually id


//year semistar code four  digit number 
// const genarateStudentId=(payLoad:TAcademicSemistar)



// find Academic Semistar Info 
const admissionSemistar=await AcademicSemistar.findById(payload.admissionSemistar)

userData.id=await generateStudentId(admissionSemistar);


const NewUser = await User.create(userData);

//built in static method 
// create a User 
if(Object.keys(NewUser).length){
    payload.id=NewUser.id;
    payload.user=NewUser._id

    const newStudent=await Student.create(payload);
    return newStudent
  }

};


export const USerServices={
    createStudentIntoDb

}