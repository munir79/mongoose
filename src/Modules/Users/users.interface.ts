

export type TUsers={
    id:string,
    passWord:string,
    needPasswordChange:boolean,
    role:'admin'|'student'|'faculty',
    status:'in-progress'|'blocekd',
    isDeleted:boolean
}