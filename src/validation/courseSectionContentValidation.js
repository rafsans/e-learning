import Joi from "joi";

const courseSectionContentSchema = {
    create: Joi.object({
        section_id: Joi.number().required().messages({
            "number.base": "Course ID harus berupa angka",
            "number.empty": "Course ID tidak boleh kosong",
            "any.required": "Course ID wajib diisi",
        }),
        title: Joi.string().min(3).max(30).required().messages({
            "string.base": "Title harus berupa string",
            "string.empty": "Title tidak boleh kosong",
            "string.min": "Title minimal 3 karakter",
            "string.max": "Title maksimal 30 karakter",
            "any.required": "Title wajib diisi",
        }),
        description: Joi.string().min(3).max(30).required().messages({
            "string.base": "Description harus berupa string",
            "string.empty": "Description tidak boleh kosong",
            "string.min": "Description minimal 3 karakter",
            "string.max": "Description maksimal 30 karakter",
            "any.required": "Description wajib diisi",
        }),
    }),
    update: Joi.object({
        section_id: Joi.number().required().messages({
            "number.base": "Course ID harus berupa angka",
            "number.empty": "Course ID tidak boleh kosong",
            "any.required": "Course ID wajib diisi",
        }),
        title: Joi.string().min(3).max(30).required().messages({
            "string.base": "Title harus berupa string",
            "string.empty": "Title tidak boleh kosong",
            "string.min": "Title minimal 3 karakter",
            "string.max": "Title maksimal 30 karakter",
            "any.required": "Title wajib diisi",
        }),
        description: Joi.string().min(3).max(30).required().messages({
            "string.base": "Description harus berupa string",
            "string.empty": "Description tidak boleh kosong",
            "string.min": "Description minimal 3 karakter",
            "string.max": "Description maksimal 30 karakter",
            "any.required": "Description wajib diisi",
        }),
    })
}

export default courseSectionContentSchema;