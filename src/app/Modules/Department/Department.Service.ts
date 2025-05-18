import { TAcademicDepartmnet } from './AcademicDepartment.interface';
import { AcademicDepartmnetModel } from './AcademicDepartmnet.model';

const CreateAcademicDepartmentIntoDb = async (payLoad: TAcademicDepartmnet) => {
  const IsDepartmNetExist = await AcademicDepartmnetModel.findOne({
    name: payLoad.name,
  });

  if (IsDepartmNetExist) {
    throw new Error(' This DepartMent Is Already Exisist');
  }

  const result = await AcademicDepartmnetModel.create(payLoad);
  return result;
};

//                      *  ******************** get all Academic Departmnet   ..................................

const getAllAcademicDepartmnetFromDb = async () => {
  const result = await AcademicDepartmnetModel.find();
  return result;
};

// get single AcademicDepartmnet
const getSingleAcademicDepartmnetfromDb = async (id: string) => {
  const result = await AcademicDepartmnetModel.findById(id);
  return result;
};

// update Academic Departmnet
const UpdateAcademicDepartmentIntoDb = async (
  id: string,
  payLoad: Partial<TAcademicDepartmnet>
) => {
  // if(payLoad.name && payLoad.code){
  //     const Academic
  // }

  const result = await AcademicDepartmnetModel.findByIdAndUpdate({ _id: id }, payLoad, {
    new: true,
  });
  return result;
};

export const DepartmentService = {
  CreateAcademicDepartmentIntoDb,
  getAllAcademicDepartmnetFromDb,
  getSingleAcademicDepartmnetfromDb,
  UpdateAcademicDepartmentIntoDb,
};
