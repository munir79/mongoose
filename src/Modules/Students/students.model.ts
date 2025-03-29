import { Schema, model } from "mongoose";
import validator from 'validator';
import {  StudentModel, TGurdain, TLocalGuardian, TStudent,  TUserName,  } from "./student.interface";
// import { studentModel, TGurdain, TLocalGuardian, TStudent,  TUserName,  } from "./student.interface";
//

import bycript from 'bcrypt'
import config from "../../app/config";
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
  password: {
    type: String,
    required: true,
    unique:true,
    ref:"User"
   
  },
  user:{
   type:Schema.Types.ObjectId,
   required:[true,'user id is required'],
   unique:true,
   ref:"User"
  },


  admissionSemistar:{
  type:Schema.Types.ObjectId,
  ref:' AcademicSemistar'
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
  
  isDeleted:{
    type:Boolean,
    default:false
  }
});


// documwnt  pre  middleware 

//pre save middleware/hook
studentShema.pre('save', async function(next){
  // console.log(this ,'pre hook , we will save the data ');
 //hasing password and save into db 
 // eslint-disable-next-line @typescript-eslint/no-this-alias
 const user=this;
 user.password= await bycript.hash(user.password,Number(config.bycript_salt));
 next();
})


//document  post save middlware/hook 

studentShema.post('save',function(doc,next){
  doc.password='';
  console.log(this,'post hook : we   saved data ')
  next()
})


// query pre middleware 
studentShema.pre('find',function(next){
  // console.log(this);
})


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
