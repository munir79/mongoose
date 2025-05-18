import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/SendResPonse';
import { DepartmentService } from './Department.Service';
import HttpStatus from 'http-status';

const CreateAcademicDepartmnetControllers = catchAsync(async (req, res, next) => {
  // <*************************************** [Avoid try catch] ********************************************>
  //                                          **************
  //
  //*********************************************************** */
  const { Department: DepartmnetData } = req.body;
  const result = await DepartmentService.CreateAcademicDepartmentIntoDb(DepartmnetData);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    sucess: true,
    message: 'academic Departmnet controllers Cretaed SucessFully ',
    data: result,
  });
});

// get all Academic Semistar controller

const getAllAcademicDepartmnetControllers = catchAsync(async (req, res, next) => {
  const result = await DepartmentService.getAllAcademicDepartmnetFromDb();
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    sucess: true,
    message: 'All Academic  Departmnet  get Sucessfully',
    data: result,
  });
});

// get SingleAcademic Semistar

const getSingleAcademicDepartmentControllers = catchAsync(async (req, res, next) => {
  const { departmnetId } = req.params;
  const result = await DepartmentService.getSingleAcademicDepartmnetfromDb(departmnetId);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    sucess: true,
    message: 'Single Academic Faculties fetched Sucessfully',
    data: result,
  });
});

// updateAcademicSemistarControllers

const UpdateAcademicDepartment = catchAsync(async (req, res, next) => {
  const { facultyId } = req.params;
  const updateData = req.body;
  const result = await DepartmentService.UpdateAcademicDepartmentIntoDb(facultyId, updateData);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    sucess: true,
    message: 'Academic Faculty Updated Sucessfully',
    data: result,
  });
});

export const AcademicDepartmnetControllers = {
  CreateAcademicDepartmnetControllers,
  getAllAcademicDepartmnetControllers,
  getSingleAcademicDepartmentControllers,
  UpdateAcademicDepartment,
};
