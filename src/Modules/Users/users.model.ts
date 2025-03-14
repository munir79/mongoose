import { model, Schema } from "mongoose";
import { Tuser } from "./users.interface";


const userSchema=new Schema<Tuser>({
    id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    needPasswordChange:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        enum:['admin','student','faculty']
    },
    status:{
        type:String,
        enum:['inprogress','blocked'],
        default:'inprogress'
    },
   isDeleted:{
    type:Boolean,
    default:false

   }
   
    
} ,{timestamps:true})

export const User=model<Tuser>('User',userSchema)  

//note here modelname is user and User its a database collection