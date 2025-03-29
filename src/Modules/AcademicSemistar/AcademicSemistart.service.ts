import { TAcademicSemistarCode } from "./academicSemistar.interface";
import { AcademicSemistar } from "./acdemicSemistar.model";



const createAcademicSemistarIntoDB=async(payLoad:TAcademicSemistarCode)=>{

    const result=await AcademicSemistar.create(payLoad);
    return result;

}

export const CreateAcademicSemistarService={
    createAcademicSemistarIntoDB
}