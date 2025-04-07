import { TAcademicDepartment } from "./AcademicDepartment.interface";
import { AcaDemicDepartMent } from "./AcademicDepartment.model";

 

// createAcademicDepartmnetIntoDb

 const createAcaDemicDepartmentIntoDb=async(payLoad:TAcademicDepartment)=>{
    const result=await AcaDemicDepartMent.create(payLoad);
  return result;
 }


 //get all AcademicDepartmnet into Db

 const getAllAcademicDepartment=async()=>{
    const result=await AcaDemicDepartMent.find();
    return result;
 }



//  get a SingleAcademic Departmnet 

const getASingleAcademicDepartmnet=async(id:string)=>{
    const result= await AcaDemicDepartMent.findById(id);
    return result;
}



// update Academic Departmnet 

const UpdateAcademicDeparmnet=async(id:string,payLoad:Partial<TAcademicDepartment>)=>{
    const result=await AcaDemicDepartMent.findOneAndUpdate({id:id},payLoad,{new:true});
    return result
}


export const AcademicDepartMentService={
    createAcaDemicDepartmentIntoDb,getASingleAcademicDepartmnet,getAllAcademicDepartment,UpdateAcademicDeparmnet
}
