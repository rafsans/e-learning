import Joi from "joi";

const courseSchema = {
    create: Joi.object({
        category_id: Joi.number().required().messages({
            "number.base": "Category ID harus berupa angka",
            "number.empty": "Category ID tidak boleh kosong",
            "any.required": "Category ID wajib diisi",
        }),
        title: Joi.string().min(3).max(30).required().messages({
            "string.base": "Title harus berupa string",
            "string.empty": "Title tidak boleh kosong",
            "string.min": "Title minimal 3 karakter",
            "any.required": "Title wajib diisi",
        }),
        image: Joi.string().required().messages({
            "string.empty": "Image tidak boleh kosong",
            "any.required": "Image wajib diisi",
        }),
        description: Joi.string().min(3).max(30).required().messages({
            "string.base": "Description harus berupa string",
            "string.empty": "Description tidak boleh kosong",
            "string.min": "Description minimal 3 karakter",
            "any.required": "Description wajib diisi",
        }),
    }),
    update: Joi.object({
        category_id: Joi.number().required().messages({
            "number.base": "Category ID harus berupa angka",
            "number.empty": "Category ID tidak boleh kosong",
            "any.required": "Category ID wajib diisi",
        }),
        title: Joi.string().min(3).max(30).required().messages({
            "string.base": "Title harus berupa string",
            "string.empty": "Title tidak boleh kosong",
            "string.min": "Title minimal 3 karakter",
            "any.required": "Title wajib diisi",
        }),
        image: Joi.string().messages({
            "string.empty": "Image tidak boleh kosong",
        }),
        description: Joi.string().min(3).max(30).required().messages({
            "string.base": "Description harus berupa string",
            "string.empty": "Description tidak boleh kosong",
            "string.min": "Description minimal 3 karakter",
            "any.required": "Description wajib diisi",
        }),
    }),
};

export default courseSchema;
