import { error } from "console";
import { NextFunction, Request, Response } from "express";

 

 const globalErrorHandelar=
  ((err:any,
    req:Request,
    res:Response,
    next:NextFunction)=>{
        const statusCode=5000;
        const message=err.message || 'something went wrong';

        return res.status(statusCode).json({
            success:false,
            message,
            error:err

        })

 })

 export default globalErrorHandelar;