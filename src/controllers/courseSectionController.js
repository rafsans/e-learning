import courseSectionModel from "../models/courseSection/courseSectionModel.js";

const getAllCourseSections = async (req, res) => {
    try {
        const courseSections = await courseSectionModel.getAllCourseSections();
        res.status(200).json({
        status: "success",
        message: "Course sections fetched successfully",
        data: courseSections,
        });
    } catch (error) {
        console.error("Error fetching course sections:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    }
const getCourseSectionById = async (req, res) => {
    const { id } = req.params;
    try {
        const courseSection = await courseSectionModel.getCourseSectionById(parseInt(id));
        if (!courseSection) {
            return res.status(404).json({ message: "Course section not found" });
        }
        res.status(200).json({
            status: "success",
            message: "Course section fetched successfully",
            data: courseSection,
        });
    } catch (error) {
        console.error("Error fetching course section:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const post = async (req, res) => {
    const body = req?.body;
    console.log(body);
    try {
        const postBody = await courseSectionModel.post(body);
        
        res.status(200).json({
            status: "success",
            message: "Course section created successfully",
            data: postBody,
        });
    } catch (error) {
        console.error("Error creating course section:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const put = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const updateCourseSection = await courseSectionModel.put(parseInt(id), body);
        res.status(200).json({
            status: "success",
            message: "Course section updated successfully",
            data: updateCourseSection,
        });
    } catch (error) {
        console.error("Error updating course section:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        await courseSectionModel.destroy(parseInt(id));
        res.status(200).json({
            status: "success",
            message: "Course section deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting course section:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default { getAllCourseSections, getCourseSectionById, post, put, destroy };