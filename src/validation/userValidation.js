import Joi from "joi";

const userSchema = {
    create: Joi.object({
        name: Joi.string().min(3).max(50).required().messages({
            "string.base": "Nama harus berupa string",
            "string.empty": "Nama tidak boleh kosong",
            "string.min": "Nama minimal 3 karakter",
            "any.required": "Nama wajib diisi",
        }),
        email: Joi.string().email().required().messages({
            "string.email": "Email tidak valid",
            "string.empty": "Email tidak boleh kosong",
            "any.required": "Email wajib diisi",
        }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required().messages({
            "string.base": "Password harus berupa string",
            "string.empty": "Password tidak boleh kosong",
            "string.min": "Password minimal 6 karakter",
            "any.required": "Password wajib diisi",
        }),
    }),
    update: Joi.object({
        name: Joi.string().min(3).max(50).required().messages({
            "string.base": "Nama harus berupa string",
            "string.empty": "Nama tidak boleh kosong",
            "string.min": "Nama minimal 3 karakter",
            "any.required": "Nama wajib diisi",
        }),
        email: Joi.string().email().required().messages({
            "string.email": "Email tidak valid",
            "string.empty": "Email tidak boleh kosong",
            "any.required": "Email wajib diisi",
        }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required().messages({
            "string.base": "Password harus berupa string",
            "string.empty": "Password tidak boleh kosong",
            "string.min": "Password minimal 6 karakter",
            "any.required": "Password wajib diisi",
        }),
    }),
};

export default userSchema;