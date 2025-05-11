import { model, Schema } from "mongoose";
import { Tuser } from "./Users.interface";


const UserSchema=new Schema<Tuser>(
    {
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
            enum:['admin' ,'student', 'faculty']
        },
        status:{
            type:String,
            enum:['in-progress','block',],
            default:'in-progress'
        }, 
        isDeleted:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
)
 
 export const User=model<Tuser>("User",UserSchema)