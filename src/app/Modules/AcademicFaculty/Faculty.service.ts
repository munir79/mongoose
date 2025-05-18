import { TAcademicFaculty } from "./AcademicFaculty.inteface";
import { AcademicFacultyModel } from "./AcademicFaculty.model";



const CreateAcademicFacultyIntoDb=async(payLoad:TAcademicFaculty)=>{
   

    
    const result=await AcademicFacultyModel.create(payLoad);
    return result

}


// get all Academic SemistarServices 

const getAllAcademicFacultiesFromDb=async()=>{
    const result=await AcademicFacultyModel.find();
    return result
}

// get singleAcademicSemistarFromDb
const getSingleAcademicFacultyFromDb=async(id:string)=>{
    const result=await AcademicFacultyModel.findById(id);
    return result;
}


// update Academic Semistar
const UpdateAcademicFacultyIntoDb=async(id:string, payLoad:Partial<TAcademicFaculty>)=>{
    // if(payLoad.name && payLoad.code){
    //     const Academic
    // }
  
    const result=await AcademicFacultyModel.findByIdAndUpdate( {_id:id},payLoad,{
        new:true,
      
    })
    return result;

}


export const FacultyServices={
  CreateAcademicFacultyIntoDb,
  getAllAcademicFacultiesFromDb,
  getSingleAcademicFacultyFromDb,
  UpdateAcademicFacultyIntoDb
}