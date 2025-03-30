import { model, Schema } from "mongoose";
import { TAcademicSemistar } from "./academicSemistar.interface";
import {
  AcademicSemistarCode,
  AcademicSemistarName,
  months,
} from "./AcademicSemistart.const";

const academicSemistar = new Schema<TAcademicSemistar>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemistarName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemistarCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  {
    timestamps: true,
  }
);

// middleware is exsist semistar in same year name

academicSemistar.pre("save", async function (next) {
  const isSemistartExsist = await AcademicSemistar.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemistartExsist) {
    throw new Error("Semistar is Already Esxist this year !!");
  }
  next();
});

//note here "Academic semistar will be create a singula collection in database and Academic Semistar is Scema name "
export const AcademicSemistar = model<TAcademicSemistar>(
  "AcademicSemistar",
  academicSemistar
);
