import { TAcademicSemistarCode, TAcademicSemistarName, TacademisSemistarNameCodeMapper, TMonths } from "./academicSemistar.interface";

 export const months:TMonths[] = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  export  const AcademicSemistarName:TAcademicSemistarName[]=["Auttam","Summar","Fall"]
  export const AcademicSemistarCode:TAcademicSemistarCode[]=["01","02","03"]

 export  const AcademicSemistarNameCodeMapper:TacademisSemistarNameCodeMapper ={
    Auttam:"01",
    Summar:"02",
    Fall:"03"
};