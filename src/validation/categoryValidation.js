import Joi from "joi";

const categorySchema = {
    create: Joi.object({
        name: Joi.string().min(3).max(30).required().messages({
            "string.base": "Nama harus berupa string",
            "string.empty": "Nama tidak boleh kosong",
            "string.min": "Nama minimal 3 karakter",
            "any.required": "Nama wajib diisi",
        }),
    }),
    update: Joi.object({
        name: Joi.string().min(3).max(30).required().messages({
            "string.base": "Nama harus berupa string",
            "string.empty": "Nama tidak boleh kosong",
            "string.min": "Nama minimal 3 karakter",
            "any.required": "Nama wajib diisi",
        }),
    }),
};

export default categorySchema;
