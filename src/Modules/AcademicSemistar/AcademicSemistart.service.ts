import { TAcademicSemistar } from "./academicSemistar.interface";
import { AcademicSemistarNameCodeMapper } from "./AcademicSemistart.const";
import { AcademicSemistar } from "./acdemicSemistar.model";



const createAcademicSemistarIntoDB=async(payLoad:TAcademicSemistar)=>{




    if(AcademicSemistarNameCodeMapper[payLoad.name]!==payLoad.code){
         throw new Error("invalid Semistar code ")
    }

    const result=await AcademicSemistar.create(payLoad);
    return result;

}


const getAllAcademicSemisTarServiceFromDb=async()=>{
    const result=await AcademicSemistar.find();
    return result;
}


export const CreateAcademicSemistarService={
    createAcademicSemistarIntoDB,
    getAllAcademicSemisTarServiceFromDb
}