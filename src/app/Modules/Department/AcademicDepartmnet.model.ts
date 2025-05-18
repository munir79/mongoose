import { model, Schema } from "mongoose";
import { TAcademicDepartmnet } from "./AcademicDepartment.interface";


const AcademicDepartmnetSchema=new Schema<TAcademicDepartmnet>(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        academicfaculty:{
            type:Schema.Types.ObjectId,
            ref:'AcademicFacultyModel'
        }
     
    },
    {
        timestamps:true
    }
)
 
 export const AcademicDepartmnetModel =model<TAcademicDepartmnet>("AcademicFaculty",AcademicDepartmnetSchema)