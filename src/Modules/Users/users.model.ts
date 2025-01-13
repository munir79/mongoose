import { model, Schema } from "mongoose";
import { TUsers } from "./users.interface";

const UsersSchema=new Schema<TUsers>({
    id:{
        type:String,
        required:true
    },
    passWord:{
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
        enum:['in-progress','blocekd']
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

// now create a model

export const USer=model<TUsers>('User',UsersSchema);