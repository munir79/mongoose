import { Schema, model } from "mongoose";
import validator from 'validator';
import {  StudentModel, TGurdain, TLocalGuardian, TStudent,  TUserName,  } from "./student.interface";
// import { studentModel, TGurdain, TLocalGuardian, TStudent,  TUserName,  } from "./student.interface";
//
export const UserSchema = new Schema<TUserName>({
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

export const GurdianShema = new Schema<TGurdain>({
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
  motherName:{
    type:String,
    required:true
  },
  motherOccupation:{
    type:String,
    required:true
  }
});


export const  LocalGuradianSchema=new Schema<TLocalGuardian>({
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
const studentShema = new Schema<TStudent,StudentModel>({
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

// creating a custom static method 

studentShema.statics.isUSerExists=async function(id:string){
  const exsistingUSer=await Student.findOne({id});
  return exsistingUSer;
}


//  for creating  instacne 


//  studentShema.methods.isUSerExists=async function(id:string){
//   const exsistingUser=await Student.findOne({id});
//   return exsistingUser
//  }

 // now here create a model 
// export  const Student=model<TStudent,studentModel>("studentModel",studentShema)
export  const Student=model<TStudent,StudentModel>("studentModel",studentShema)
