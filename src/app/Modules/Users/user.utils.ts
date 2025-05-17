import { TAcademicSemistar } from '../AcademicSemistar/AcademicSemistar.interface';
import { User } from './Users.model';

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

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

export const generatedStudenrId = async (payLoad: TAcademicSemistar) => {
  // firstitme 0000
  const currentId = (await findLastStudentId()) || (0).toString();
  let IncrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  IncrementId = `${payLoad.year} ${payLoad.code} ${IncrementId}`;
  return IncrementId;
};
