
 export  type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
  export type TAcademicSemistarName='Auttum'|'Summer' |'Fall';
  export type TacademicSemistarCode='01' |'02' |'03';

export type TAcademicSemistar={
    name:TAcademicSemistarName,
    code:TacademicSemistarCode,
    year:Date ,
    startMonth:TMonth,
    endMonth:TMonth

}