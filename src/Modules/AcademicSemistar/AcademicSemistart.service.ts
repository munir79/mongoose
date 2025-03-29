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

// ****************************get all AcademicSemistart *************************************
const getAllAcademicSemisTarServiceFromDb=async()=>{
    const result=await AcademicSemistar.find();
    return result;
}

//--------------------------------------------getSingleSemistar-------------------------------

const getSingleSemistarServiceFromDb=async(id:string)=>{
    const result=await AcademicSemistar.findById(id);
    return result;

}

export const CreateAcademicSemistarService={
    createAcademicSemistarIntoDB,
    getSingleSemistarServiceFromDb,
    getAllAcademicSemisTarServiceFromDb,
  
}