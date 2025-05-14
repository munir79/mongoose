import { model, Schema } from "mongoose";
import { TAcademicSemistar, TacademicSemistarCode, TAcademicSemistarName, TMonth } from "./AcademicSemistar.interface";

const AcademicSemistarName:TAcademicSemistarName[]=['Auttum','Summer','Fall'];
const AcademicSemistarCode:TacademicSemistarCode[]=["01","01","03"];
const Month:TMonth[]=['January','February','March','April','May','June','July','August','September','October','November','December']

const AcademicSemistarSchema=new Schema<TAcademicSemistar>(
    {
        name:{
            type:String,
            required:true,
            enum:AcademicSemistarName
        },
        code:{
            type:String,
            required:true,
            enum:AcademicSemistarCode
        },
        year:{
            type:Date,
            required:true

        },
        startMonth:{
            type:String,
            required:true,
            enum:Month
        },
        endMonth:{
            type:String,
            required:true,
            enum:Month
        }, 
        
    },
    {
        timestamps:true
    }
)

//pre middleware
AcademicSemistarSchema.pre('save',async function(next){
    const isSemistarExists=await AcademicSemistarModel.findOne({
        year:this.year,
        name:this.name
    })
    if(isSemistarExists){
        throw new Error('Semistar is already exists');
    }
    next()
})
 
 export const AcademicSemistarModel=model<TAcademicSemistar>("User",AcademicSemistarSchema)