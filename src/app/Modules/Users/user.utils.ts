import { TAcademicSemistar } from '../AcademicSemistar/AcademicSemistar.interface';
import { User } from './Users.model';

//find last student id
const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generatedStudenrId = async (payLoad: TAcademicSemistar) => {
  // firstitme 0000
  let currentId = (0).toString(); // 0000  by default  [ step 1-----by default set 0]

  const lastStudentId = await findLastStudentId(); // find last student id by sort
  const LastStudentSemestarCode = lastStudentId?.substring(4, 6); //  semistar code 01 , 02
  const lastStudentYear = lastStudentId?.substring(0, 4); // year 2030

  const currentStudentSemistarCode = payLoad.code; // current semistarcode
  const currentYear = payLoad.year.toString(); // current year

  if (
    lastStudentId &&
    LastStudentSemestarCode === currentStudentSemistarCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId.substring(6);
  }

  // if(await findLastStudentId()){
  //  const lastStudent
  // }

  let IncrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  IncrementId = `${payLoad.year} ${payLoad.code} ${IncrementId}`;
  return IncrementId;
};
