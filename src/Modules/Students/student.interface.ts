// import { Schema, model, connect } from "mongoose";


// step 1: create a interface 
// step 2: create a schema 
// step 3: create a model 
// step 4 : then do db query 

// be remember carte a schem abased on interface 

export type Gurdain = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian ={
    name:string;
    occupation:string;
    contactNumber:string
}
export type Student = {
  id: string;
  name: UserName;

  gender: "female" | "male";
  contactNumber: string;
  emergencyContactNumber: string;
  guardian: Gurdain;
  presentAddress: string;
  permannetAddress: string;
  localGuardian:LocalGuardian;
  profileImage:string;
  isActive:"active"| "inactive";

  email: string;
  avatar?: string;
};
