
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
    password:string;
    name:TName,
    gender:'male' |'female',
    email:string,
    dateOfBirth:string,
    constactNumber:string,
    emergencyContactNumber:string,
    bloodGroup:'A+' | 'A-',
    presentAddress:string,
    permanentAddress:string,
    guardian:Tguardian,
    localGuardian:TlocalGuardian,
    profileImg:string,
    isActive:'actice'|'in-active'

}