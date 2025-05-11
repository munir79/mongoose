import { NextFunction, Request, Response } from "express";
import  HttpStatus from "http-status";

const notFound=((err:any,
    req:Request,
    res:Response,
    next:NextFunction)=>{
       return res.status(HttpStatus.NOT_FOUND).json({
        success:false,
        message:"Api Not Fund",
        err:''
       })
    }
)

export default notFound;