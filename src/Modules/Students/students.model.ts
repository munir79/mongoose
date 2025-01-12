import { Schema, model } from "mongoose";
import { Gurdain, LocalGuardian, Student, UserName } from "./student.interface";

export const UserSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    require: true,
  },
});

export const GurdianShema = new Schema<Gurdain>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation:{
    type:String,
    required:true
  },
  motheName:{
    type:String,
    required:true
  },
  motherOccupation:{
    type:String,
    required:true
  }
});


export const  LocalGuradianSchema=new Schema<LocalGuardian>({
    name:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true,
    },
    occupation:{
        type:String,
        required:true
    }
    
})
const studentShema = new Schema<Student>({
  id: {
    type: String,
    required: true,
  },
  name: UserSchema,
  gender: ["female", "male"],
  guardian:GurdianShema,
  localGuardian:LocalGuradianSchema,
  presentAddress:{
    type:String,
    required:true
  },
  permannetAddress:{
    type:String,
    required:true
  },

  email: {
    type: String,
    required: true,
  },
});

// now here create a model 

export  const StudentMOdel=model<Student>("studentModel",studentShema)
