


const crteateStudent=async(req:Request,res:Response)=>{
  try{
    const {student:studentData} =req.body;
    // const StudentZodVAlidateData=StudentZodvalidateSchema.parse(studentData);
    const ZodParseData=StudentZodvalidateSchema.parse(studentData);

    // const {error,value}=studentJoiVAlidationSchema.validate(studentData);
   
    const result =await StudentService.insertStudentIntoDb(ZodParseData);
    // const result =await StudentService.insertStudentIntoDb(studentData);
    // console.log("error",error,value)
    // console.log("result",result);

    res.status(200).json({ 
        sucess:true,
        message:"user created  successfully",
        data:result
    })
  }
  catch(err:any){
    res.status(500).json({ 
      sucess:false ,
      message:err.message || "something went wrong ",
      data:err
  })
  }

}