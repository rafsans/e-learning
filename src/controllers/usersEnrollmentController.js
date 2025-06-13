import usersEnrollmentModel from "../models/usersEnrollmentModel.js";
import usersEnrollmentValidation from "../validation/usersEnrollmentValidation.js";
import courseModel from "../models/courseModel.js";

const usersEnrollmentController = {
    async getAllEnrollment(req, res) {
        try {
            const id = req.user.id;
            const enrollments = await usersEnrollmentModel.getAllEnrollment(parseInt(id));
            res.status(200).json({
                status: true,
                message: "Success",
                data: enrollments,
            });
        } catch (error) {
            res.status(500).json({ status: false, message: "Internal Server Error" });
        }
    },
    async addEnrollment(req, res) {
        try {
            const body = req.body;
            const data = {
                user_id: parseInt(req.user.id),
                course_id: parseInt(body.course_id)
            }
            const existCourse = await usersEnrollmentModel.getEnrollCourseById(data.user_id, data.course_id);
            if (existCourse) {
                return res.status(409).json({
                    status: false,
                    message: "User already enrolled in this course",
                });
            }
            const findCourse = await courseModel.getCourseById(data.course_id);
            if (!findCourse) {
                return res.status(404).json({
                    status: false,
                    message: "Course not found",
                });
            }
            const { error } = await usersEnrollmentValidation.create.validate(body, { abortEarly: false });
            if (error) {
                const validationError = error.details.map((err) => ({
                    field: err.path[0],
                    message: err.message,
                }));
                return res.status(422).json({
                    status: false,
                    message: "Validation Error",
                    errors: validationError,
                });
            }
            await usersEnrollmentModel.create(data);
            res.status(201).json({
                status: true,
                message: "User enrollment created successfully",
            });
        } catch (error) {
            res.status(500).json({ status: false, message: "Internal Server Error" ,error: error.message});
        }
    }
};

export default usersEnrollmentController;