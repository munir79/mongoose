
//create a interface -> reate a model 
export type Tuser={
    id:string,
    password:string,
    needPasswordChange:boolean,
    status:'inprogress' |'blocked',
    role:'admin'| 'student'| 'faculty',
    isDeleted:boolean,
} 
 export type NewUser={
    role:string,
    password:string
    id:string
}