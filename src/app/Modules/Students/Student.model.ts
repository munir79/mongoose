import  { Schema, model } from 'mongoose';
import { TStudent } from './Students.interface';

const NameSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
}, );

const GuardianSchema = new Schema({
  fatherName: { type: String, required: true },
  fatherOccupassion: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupassion: { type: String, required: true },
},);

const LocalGuardianSchema = new Schema({
  name: { type: String, required: true },
  occupassion: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
},);

const StudentSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: NameSchema, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  email: { type: String, required: true, unique: true },
  user:{
   type:Schema.Types.ObjectId,
   required:[true,"user id is required"],
   unique:true,
   ref:'User'
  },
  dateOfBirth: { type: String, required: true },
  constactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: { type: String, enum: ['A+', 'A-'], required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: GuardianSchema, required: true },
  localGuardian: { type: LocalGuardianSchema, required: true },
  profileImg: { type: String, required: true },
}, {
  timestamps: true,
});

export const StudentModel=model<TStudent>("Student",StudentSchema)