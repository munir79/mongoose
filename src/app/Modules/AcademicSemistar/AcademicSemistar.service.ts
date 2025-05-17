import { TAcademicSemistar } from "./AcademicSemistar.interface";
import { AcademicSemistarModel } from "./Academicsemistar.model";


const CreateAcademicSemistarIntoDb=async(payLoad:TAcademicSemistar)=>{
    type TAcademicSemistarMapper={
        [key:string]:string
    }

    const AcademicSemistarMapper:TAcademicSemistarMapper={
        Auttum:'01',
        Summar:'02',
        Fall:'03'
    }

    if(AcademicSemistarMapper[payLoad.name] !==payLoad.code){
        throw new Error('Invalid Semistar code ');
    }
    const result=await AcademicSemistarModel.create(payLoad);
    return result

}


// get all Academic SemistarServices 

const getAllAcademicSemistarFromDb=async()=>{
    const result=await AcademicSemistarModel.find();
    return result
}

// get singleAcademicSemistarFromDb
const getSingleAcademicSemistarFromDb=async(id:string)=>{
    const result=await AcademicSemistarModel.findById(id);
    return result;
}


// update Academic Semistar
const UpdateAcademicSemistarFromDb=async(id, payLoad:Partial<TAcademicSemistar>)=>{
    // if(payLoad.name && payLoad.code){
    //     const Academic
    // }
  
    const result=await AcademicSemistarModel.findByIdAndUpdate(id,payLoad,{
        new:true,
        runvALIDATOR:true
    })
    return result;

}


export const AcademicSemistarService={
    CreateAcademicSemistarIntoDb,
    getAllAcademicSemistarFromDb,
    getSingleAcademicSemistarFromDb,
    UpdateAcademicSemistarFromDb
}