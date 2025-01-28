// import { Schema, model, connect } from "mongoose";

import { Model } from "mongoose";




// step 1: create a interface 
// step 2: create a schema 
// step 3: create a model 
// step 4 : then do db query 

// be remember carte a schem abased on interface 

export type TGurdain = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
};

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TLocalGuardian ={
    name:string;
    occupation:string;
    contactNumber:string
}
export type TStudent = {
  id: string;
  password:string;
  name: TUserName;

  gender: "female" | "male";
  contactNumber: string;
  emergencyContactNumber: string;
  guardian: TGurdain;
  presentAddress: string;
  permannetAddress: string;
  localGuardian:TLocalGuardian;
  profileImage:string;
  isActive:"active"| "inactive";


  

  email: string;
  avatar?: string;
  isDeleted: false
};

//for creating statics 
export interface StudentModel extends Model<TStudent> {
  isUSerExists(id:string):Promise<TStudent |null>
}





//custom instance 

// export type StudentMethods={
//   isUSerExists(id:string):Promise<TStudent |null>
// }


// export type studentModel = Model<TStudent, Record <string,never>  , StudentMethods>;