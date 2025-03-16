/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import  {  NextFunction, Request, Response } from 'express'



const globalerrorHandelar1=(err:any,req:Request,res:Response,next:NextFunction)=>{
    const statusCode=500;
    const message = err.message ||"somethings went wrong";
    
    return res.status(statusCode).json({
      success:false,
      message,
      error:err
    })
    }


    export default globalerrorHandelar1;
    