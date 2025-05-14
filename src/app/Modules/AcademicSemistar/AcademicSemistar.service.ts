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

export const AcademicSemistarService={
    CreateAcademicSemistarIntoDb
}