import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./AcademicFaculty.model";

const createAcaDemicFacultyIntoDb = async (payLoad: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payLoad);
  return result;
};

// get all Faculty

const getAllAcademicFacultyFromDb = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

// get a Single Academic Faculty

const getAsingleAcademicFacultyFromDb = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};


const UpdateAcademicFacultyIntoDb=async( id:string,
    payLoad:Partial<TAcademicFaculty>)=>{

     const result= await AcademicFaculty.findOneAndUpdate({_id:id},payLoad,{new:true});
     return result; 
  
}

export const AcademicFacultyService={
createAcaDemicFacultyIntoDb,
getAllAcademicFacultyFromDb,
getAsingleAcademicFacultyFromDb,
UpdateAcademicFacultyIntoDb
}