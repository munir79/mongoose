

export type Tuser={
    id:string,
    password:string,
    needPasswordChange:boolean,
    role:'admin' |'student'| 'faculty',
    status:'in-progress'|'block',
    isDeleted:boolean

}

// export type NewUser={
//     role:string,
//     password:string ,
//     id:string
// }