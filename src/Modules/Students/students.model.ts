import { Schema, model } from "mongoose";
import validator from 'validator';
import { Gurdain, LocalGuardian, Student, UserName } from "./student.interface";

export const UserSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true,'First name  is required'],
    trim:true,
    maxlength:[20 ,"first name cannot be allowed more than 20 character "]
  },
  middleName: {
    type: String,
    required: [true,'<Middle  name  is required'],
    maxlength:10
  },
  lastName: {
    type: String,
    require: [true,'middle  name  is required'],
    maxlength:15,

    // using validator pacakge 
    validate:(value:string)=>validator.isAlpha(value),
    message:'{Value is not valid }'
  },
});

export const GurdianShema = new Schema<Gurdain>({
  fatherName: {
    type: String,
    required: true,
    maxlength:20
  },
  fatherOccupation:{
    type:String,
    required:true,
    maxlength:10,
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
    unique:true,
  },
  name: UserSchema,
  gender:{
    type:String,
    enum:{
     values: ["female", "male"],
     message:'{VALUE } is not  valid'
    },
    required:true,
  },
  guardian:{
    type:GurdianShema,
    required:true
  },
  localGuardian:{
    type:LocalGuradianSchema,
    required:true
  },
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
    validate:(value:string)=>validator.isEmail(value),
    message:'{VALUE} is not valid you should give proper email',
    unique:true
  },
});

// now here create a model 

export  const StudentMOdel=model<Student>("studentModel",studentShema)
