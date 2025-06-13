import Joi from "joi";

const courseSectionSchema = {
    create: Joi.object({
        course_id: Joi.number().required().messages({
            "number.base": "Course ID harus berupa angka",
            "number.empty": "Course ID tidak boleh kosong",
            "any.required": "Course ID wajib diisi",
        }),
        title: Joi.string().min(3).max(30).required().messages({
            "string.base": "Title harus berupa string",
            "string.empty": "Title tidak boleh kosong",
            "string.min": "Title minimal 3 karakter",
            "any.required": "Title wajib diisi",
        }),
        description: Joi.string().min(3).max(30).required().messages({
            "string.base": "Description harus berupa string",
            "string.empty": "Description tidak boleh kosong",
            "string.min": "Description minimal 3 karakter",
            "any.required": "Description wajib diisi",
        }),
    }),
    update: Joi.object({
        title: Joi.string().min(3).max(30).required().messages({
            "string.base": "Title harus berupa string",
            "string.empty": "Title tidak boleh kosong",
            "string.min": "Title minimal 3 karakter",
            "any.required": "Title wajib diisi",
        }),
        description: Joi.string().min(3).max(30).required().messages({
            "string.base": "Description harus berupa string",
            "string.empty": "Description tidak boleh kosong",
            "string.min": "Description minimal 3 karakter",
            "any.required": "Description wajib diisi",
        }),
    }),
}

export default courseSectionSchema;