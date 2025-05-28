import courseModel from "../models/courses/courseModel.js";

const getAllCourses = async (req, res) => {
    try {
        const courses = await courseModel.getAllCourses();
        res.status(200).json({
            status: "success",
            message: "Courses fetched successfully",
            data: courses
        });
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getCourseContent = async (req, res) => {
    try {
        const content = await courseModel.getCourseContent();
        res.status(200).json({
            status: "success",
            message: "Content fetched successfully",
            data: content
        });
    } catch (error) {
        console.error("Error fetching content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getCourseContentByCategory = async (req, res) => {
    try {
        const category = req.body;
        const content = await courseModel.getByFilter(category);
        res.status(200).json({
            status: "success",
            message: "Content fetched successfully",
            data: content
        });
    } catch (error) {
        console.error("Error fetching content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export default {getAllCourses}