import courseSectionModel from "../models/courseSectionModel.js";
import courseSectionSchema from "../validation/courseSectionValidation.js";

const getAllCourseSections = async (req, res) => {
    try {
        const { course_id } = req.params
        const courseSections = await courseSectionModel.getAllSection(parseInt(course_id));
        res.status(200).json({
            status: true,
            message: "Course sections fetched successfully",
            data: courseSections,
        });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
}
const getCourseSectionById = async (req, res) => {
    const { id } = req.params;
    try {
        const courseSection = await courseSectionModel.getCourseSectionById(parseInt(id));
        if (!courseSection) {
            return res.status(404).json({status:false, message: "Course section not found" });
        }
        res.status(200).json({
            status: true,
            message: "Course section fetched successfully",
            data: courseSection,
        });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
}

const createCourseSection = async (req, res) => {
    try {
        const { course_id } = req.params
        const body = req.body;
        const data = {
            course_id: parseInt(course_id),
            title: body.title,
            description: body.description
        }
        const { error } = await courseSectionSchema.create.validate(data, { abortEarly: false });
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
        await courseSectionModel.createSection(data);
        res.status(201).json({
            status: true,
            message: "Course section created successfully",
        });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
};

const updateCourseSection = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body;
        const data = {
            id: parseInt(id),
            title: body.title,
            description: body.description
        }
        console.log(data);
        const { error } = await courseSectionSchema.update.validate(body, { abortEarly: false });
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
        await courseSectionModel.updateSection(data.id, body);
        res.status(200).json({
            status: true,
            message: "Course section updated successfully",
        });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
};

const destroyCourseSection = async (req, res) => {
    try {
        const { id } = req.params
        const findId = await courseSectionModel.getSectionById(parseInt(id));
        if (!findId) {
            return res.status(404).json({ status: false, message: "Course section not found" });
        }
        await courseSectionModel.destroySection(parseInt(id));
        res.status(200).json({
            status: true,
            message: "Course section deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
};

export { getAllCourseSections, getCourseSectionById, createCourseSection, updateCourseSection, destroyCourseSection };