import joi from "joi";

const registerSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.email": "Email tidak valid",
        "any.required": "Email wajib diisi",
    }),
    name: joi.string().min(3).max(30).required().messages({
        "string.base": "Nama harus berupa string",
        "string.empty": "Nama tidak boleh kosong",
        "string.min": "Nama minimal 3 karakter",
        "any.required": "Nama wajib diisi",
    }),
    password: joi.string().min(6).max(20).required().messages({
        "string.base": "Password harus berupa string",
        "string.empty": "Password tidak boleh kosong",
        "string.min": "Password minimal 6 karakter",
        "any.required": "Password wajib diisi",
    }),
});

const loginSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.email": "Email tidak valid",
        "any.required": "Email wajib diisi",
    }),
    password: joi.string().min(6).max(20).required().messages({
        "string.base": "Password harus berupa string",
        "string.empty": "Password tidak boleh kosong",
        "string.min": "Password minimal 6 karakter",
        "any.required": "Password wajib diisi",
    }),
});

export { registerSchema, loginSchema };
