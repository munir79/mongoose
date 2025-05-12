import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";


const ValidateRequest=(Schema:AnyZodObject)=>{
 
 return async(req:Request,res:Response,next:NextFunction)=>{
    // console.log(` im a senabahini ${name} `);
    // if everything allright next()->
 try{
     await  Schema.parseAsync({
        body:req.body
    });
    next();
 }catch(err){
    next(err)
 }
}
}


export default ValidateRequest