import { Types } from "mongoose"

export type TName={
firstName:string,
middleName:string,
lastName:string
}
export type Tguardian={
    
        fatherName:string,
        fatherOccupassion:string,
        motherName:string,
        motherOccupassion:string
    
}
export type TlocalGuardian={
    name:string,
    occupassion:string,
    contactNumber:string,
    address:string
}

export type TStudent={
    id:string,
    name:TName,
    gender:'male' |'female',
    email:string,
    dateOfBirth:string,
    constactNumber:string,
    emergencyContactNumber:string,
    bloodGroup:'A+' | 'A-',
    presentAddress:string,
    permanentAddress:string,
    user:Types.ObjectId,
    addmissionSemistar:Types.ObjectId,
    guardian:Tguardian,
    localGuardian:TlocalGuardian,
    profileImg:string,

}