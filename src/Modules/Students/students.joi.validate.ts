import Joi from "joi";

const userNameJoiSchema = Joi.object({
      firstName: Joi.string()
        .trim()
        .max(20)
        .required()
        .messages({
          "string.base": "First name must be a string",
          "string.empty": "First name is required",
          "string.max": "First name cannot be more than 20 characters",
        }),
      middleName: Joi.string()
        .max(10)
        .required()
        .messages({
          "string.base": "Middle name must be a string",
          "string.empty": "Middle name is required",
          "string.max": "Middle name cannot be more than 10 characters",
        }),
      lastName: Joi.string()
        .max(15)
        .required()
        .regex(/^[A-Za-z]+$/)
        .messages({
          "string.base": "Last name must be a string",
          "string.empty": "Last name is required",
          "string.max": "Last name cannot be more than 15 characters",
          "string.pattern.base": "Last name must contain only alphabetic characters",
        }),
    });
    
    // Joi Schema for Guardian
    const guardianJoiSchema = Joi.object({
      fatherName: Joi.string()
        .max(20)
        .required()
        .messages({
          "string.base": "Father's name must be a string",
          "string.empty": "Father's name is required",
          "string.max": "Father's name cannot be more than 20 characters",
        }),
      fatherOccupation: Joi.string()
        .max(10)
        .required()
        .messages({
          "string.base": "Father's occupation must be a string",
          "string.empty": "Father's occupation is required",
          "string.max": "Father's occupation cannot be more than 10 characters",
        }),
      motheName: Joi.string()
        .required()
        .messages({
          "string.base": "Mother's name must be a string",
          "string.empty": "Mother's name is required",
        }),
      motherOccupation: Joi.string()
        .required()
        .messages({
          "string.base": "Mother's occupation must be a string",
          "string.empty": "Mother's occupation is required",
        }),
    });
    
    // Joi Schema for Local Guardian
    const localGuardianJoiSchema = Joi.object({
      name: Joi.string()
        .required()
        .messages({
          "string.base": "Local guardian's name must be a string",
          "string.empty": "Local guardian's name is required",
        }),
      contactNumber: Joi.string()
        .required()
        .messages({
          "string.base": "Contact number must be a string",
          "string.empty": "Contact number is required",
        }),
      occupation: Joi.string()
        .required()
        .messages({
          "string.base": "Occupation must be a string",
          "string.empty": "Occupation is required",
        }),
    });
    
    // Main Joi Schema for Student
    const studentJoiVAlidationSchema = Joi.object({
      id: Joi.string()
        .required()
        .messages({
          "string.base": "ID must be a string",
          "string.empty": "ID is required",
        }),
      name: userNameJoiSchema.required().messages({
        "any.required": "Name object is required",
      }),
      gender: Joi.string()
        .valid("female", "male")
        .required()
        .messages({
          "string.base": "Gender must be a string",
          "any.only": "{VALUE} is not valid",
          "string.empty": "Gender is required",
        }),
      guardian: guardianJoiSchema.required().messages({
        "any.required": "Guardian object is required",
      }),
      localGuardian: localGuardianJoiSchema.required().messages({
        "any.required": "Local guardian object is required",
      }),
      presentAddress: Joi.string()
        .required()
        .messages({
          "string.base": "Present address must be a string",
          "string.empty": "Present address is required",
        }),
      permannetAddress: Joi.string()
        .required()
        .messages({
          "string.base": "Permanent address must be a string",
          "string.empty": "Permanent address is required",
        }),
      email: Joi.string()
        .email()
        .required()
        .messages({
          "string.base": "Email must be a string",
          "string.email": "{VALUE} is not valid; you should provide a proper email",
          "string.empty": "Email is required",
        }),
    });


    export default  studentJoiVAlidationSchema;

