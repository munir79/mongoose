import { TAcademicSemistar } from "../AcademicSemistar/academicSemistar.interface";
import { User } from "./users.model";


const findLastStudentId=async()=>{
    const lastStudent=await User.findOne({
        role:'student'
    },{
        id:1,
        _id:0
    }).sort({
        createdAt:-1
    })
    
    .lean();
    return lastStudent?.id?lastStudent.id.substring(6):undefined
}


export const generateStudentId=async (payLoad:TAcademicSemistar)=>{
let currentId=await findLastStudentId()||  (0).toString(); //by default



const lastStudentId=await findLastStudentId() 
//2030 01 0001
const lastStudentSemestarCode=lastStudentId?.substring(4,6);
const lastStudentYear=lastStudentId?.substring(0,4);
const currentsemestarCode=payLoad.code;
const currentyear=payLoad.year;

// if current 

if(lastStudentId && lastStudentSemestarCode===currentsemestarCode && lastStudentYear===currentyear){
    currentId=lastStudentId.substring(6)

}


let IncrementId=(Number(currentId)+1).toString().padStart(4,'0');
IncrementId=`${payLoad.year}${payLoad.code}${IncrementId}`;
return IncrementId;
}