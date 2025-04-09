import { TAcademicDepartment } from "./AcademicDepartment.interface";
import { AcaDemicDepartMent } from "./AcademicDepartment.model";

// createAcademicDepartmnetIntoDb

const createAcaDemicDepartmentIntoDb = async (payLoad: TAcademicDepartment) => {
  // cheek already AcademicDepartmnet is exist here or not

  // const isExistAcademicDepartmnet=await AcaDemicDepartMent.findOne({name:payLoad.name});
  // if(isExistAcademicDepartmnet){
  //     throw new Error("Academic Department is Already exist");
  // }
  const result = await AcaDemicDepartMent.create(payLoad);
  return result;
};

//get all AcademicDepartmnet into Db

const getAllAcademicDepartment = async () => {
  const result = await AcaDemicDepartMent.find().populate("academicFaculty"); // here populate with academic faculty
  return result;
};

//  get a SingleAcademic Departmnet

const getASingleAcademicDepartmnet = async (id: string) => {
  const result = await AcaDemicDepartMent.findById(id);
  return result;
};

// update Academic Departmnet

const UpdateAcademicDeparmnet = async (
  id: string,
  payLoad: Partial<TAcademicDepartment>
) => {
  const result = await AcaDemicDepartMent.findOneAndUpdate(
    { id: id },
    payLoad,
    { new: true }
  );
  return result;
};

export const AcademicDepartMentService = {
  createAcaDemicDepartmentIntoDb,
  getASingleAcademicDepartmnet,
  getAllAcademicDepartment,
  UpdateAcademicDeparmnet,
};
