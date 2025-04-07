import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./AcademicDepartment.interface";

const AcademicDepartMentSchema=new Schema<TAcademicDepartment>(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        academicFaculty:{
         type:Schema.Types.ObjectId,
         ref:'AcademicFaculty'
        },
        
    },
    
    {
        timestamps:true
    }
)

export const AcaDemicDepartMent=model<TAcademicDepartment>('AcademicDepartment',AcademicDepartMentSchema)