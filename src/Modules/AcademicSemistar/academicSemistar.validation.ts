import Z from "zod"
import { AcademicSemistarCode, AcademicSemistarName, months } from "./AcademicSemistart.const"

const AcademicSemoistarValidationSchema=Z.object({
    body:Z.object({
        name:Z.enum([...AcademicSemistarName] as [string,...string[]]),
        year:Z.string(),
        code:Z.enum([...AcademicSemistarCode] as [string,...string[]]),
        startMonth:Z.enum([...months]as[string,...string[]]),
        endMonth:Z.enum([...months] as [string,...string[]])


    })
})



export const AcademicSemoistarValidations={
    AcademicSemoistarValidationSchema

}