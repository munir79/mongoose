export  type TMonths =
  | "January"| "February"| "March" | "April"| "May"| "June"| "July"| "August"| "September"| "October"| "November"| "December";
 

  export type TAcademicSemistarName='Auttam'|'Summar'|'Fall';
  export type TAcademicSemistarCode='01'|'02'|'03';
export type TAcademicSemistar={
    name:TAcademicSemistar;
    code:TAcademicSemistarCode;
    year:string,
    startMonth:TMonths;
    endMonth:TMonths
}

