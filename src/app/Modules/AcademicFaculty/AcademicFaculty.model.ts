import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./AcademicFaculty.inteface";


const AcademicFacultyScema=new Schema<TAcademicFaculty>(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
     
    },
    {
        timestamps:true
    }
)
 
 export const AcademicFacultyModel =model<TAcademicFaculty>("AcademicFaculty",AcademicFacultyScema)