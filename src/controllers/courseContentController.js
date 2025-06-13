import courseContentModel from "../models/courseContent/courseContentModel";


const getById = async (req, res) => {
    try {
        const content = await courseContentModel.getById(req.params.id);
        res.status(200).json({
            status: "success",
            message: "Course Content fetched successfully",
            data: content
        });
    } catch (error) {
        console.log("Error fetching course content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const create = async (req, res) => {
    try {
        const content = await courseContentModel.create(req.body);
        res.status(200).json({
            status: "success",
            message: "Course Content created successfully",
            data: null
        });
    } catch (error) {
        console.log("Error creating course content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const update = async (req, res) => {
    try {
        const content = await courseContentModel.update(req.params.id, req.body);
        res.status(200).json({
            status: "success",
            message: "Course Content updated successfully",
            data: null
        });
    } catch (error) {
        console.log("Error updating course content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const destroy = async (req, res) => {
    try {
        const content = await courseContentModel.delete(req.params.id);
        res.status(200).json({
            status: "success",
            message: "Course Content deleted successfully",
            data: null
        });
    } catch (error) {
        console.log("Error deleting course content:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export default { getById, create, update, destroy };