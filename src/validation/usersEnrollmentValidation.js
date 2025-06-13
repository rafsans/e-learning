import Joi from "joi";

const usersEnrollmentSchema = {
    create: Joi.object({
        course_id: Joi.number().required().messages({
            "number.empty": "Course ID tidak boleh kosong",
            "any.required": "Course ID wajib diisi",
        }),
    }),
}

export default usersEnrollmentSchema;