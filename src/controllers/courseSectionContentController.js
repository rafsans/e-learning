import courseSectionContentModel from "../models/courseSectionContentModel.js";
import courseSectionModel from "../models/courseSectionModel.js";
import courseSectionContentSchema from "../validation/courseSectionContentValidation.js";

const courseSectionContentController = {
    async getAllContent(req, res) {
        try {
            const content = await courseSectionContentModel.getAllContent();
            res.status(200).json({
                status: "success",
                message: "Course Content fetched successfully",
                data: content
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    },

    async createContent(req, res) {
        try {
            const find = await courseSectionModel.getSectionById(parseInt(req.params.section_id));
            if(!find) {
                return res.status(404).json({
                    status: false,
                    message: "Section Id not found",
                });
            }
            
            const body = req.body;
            const data = {
                title: body.title,
                description: body.description,
                section_id: parseInt(req.params.section_id)
            }
            const { error } = await courseSectionContentSchema.create.validate(data, { abortEarly: false });
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


            await courseSectionContentModel.createContent(data);
            res.status(201).json({
                status: true,
                message: "Content created successfully",
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error" + error,
            });
        }
    },

    async updateContent(req, res) {
        try {
            const id = parseInt(req.params.id);
            const body = req.body;
            const findSection = await courseSectionModel.getSectionById(parseInt(body.section_id));
            if(!findSection) {
                return res.status(404).json({
                    status: false,
                    message: "Section not found",
                });
            }

            const findContent = await courseSectionContentModel.getContentById(id);
            if(!findContent) {
                return res.status(404).json({
                    status: false,
                    message: "Content not found",
                });
            }

            const data = {
                section_id: parseInt(body.section_id),
                title: body.title,
                description: body.description
            }

            const { error } = await courseSectionContentSchema.update.validate(data, { abortEarly: false });
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

            await courseSectionContentModel.updateContent(id, data);
            res.status(200).json({
                status: true,
                message: "Content updated successfully",
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error" + error,
            });
        }
    },

    async deleteContent(req, res) {
        try {
            const id = parseInt(req.params.id);
            const find = await courseSectionContentModel.getContentById(id);
            if(!find) {
                return res.status(404).json({
                    status: false,
                    message: "Content not found",
                });
            }

            await courseSectionContentModel.deleteContent(id);
            res.status(200).json({
                status: true,
                message: "Content deleted successfully",
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            })
        }
    }
};

export default courseSectionContentController;