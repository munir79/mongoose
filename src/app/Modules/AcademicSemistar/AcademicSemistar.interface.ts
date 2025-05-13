
 export  type Month =
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

export type TAcademicSemistar={
    name:'Autum'|'Summer'|'Fall',
    code:'01'|'02'| '03',
    year:Date ,
    startMonth:Month,
    endMonth:Month

}