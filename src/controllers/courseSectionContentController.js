import courseSectionContentModel from "../models/courseSectionContentModel.js";
import courseSectionModel from "../models/courseSectionModel.js";
import courseSectionContentSchema from "../validation/courseSectionContentValidation.js";

const courseSectionContentController = {
    async getAllContent(req, res) {
        try {
            const { section_id } = req.params;
            const findSection = await courseSectionModel.getSectionById(parseInt(section_id));
            if (!findSection) {
                return res.status(404).json({
                    status: false,
                    message: "Course Section not found",
                });
            }
            const content = await courseSectionContentModel.getAllContent();
            res.status(200).json({
                status: true,
                message: "Success",
                data: content
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error" + error.message,
            });
        }
    },

    async createContent(req, res) {
        try {
            const { section_id } = req.params;
            const findSection = await courseSectionModel.getSectionById(parseInt(section_id));
            if (!findSection) {
                return res.status(404).json({
                    status: false,
                    message: "Course Section not found",
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
                message: "Success",
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    },

    async updateContent(req, res) {
        try {
            const { id } = req.params;
            const body = req.body;
            const findContent = await courseSectionContentModel.getContentById(parseInt(id));
            if (!findContent) {
                return res.status(404).json({
                    status: false,
                    message: "Content not found",
                });
            }
            const data = {
                section_id: parseInt(findContent.section_id),
                title: body.title,
                description: body.description
            }

            const findSection = await courseSectionModel.getSectionById(data.section_id);
            console.log(findSection);
            if (!findSection) {
                return res.status(404).json({
                    status: false,
                    message: "Course Section not found",
                });
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
            await courseSectionContentModel.updateContent(parseInt(id), data);
            res.status(200).json({
                status: true,
                message: "Success",
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            });
        }
    },

    async deleteContent(req, res) {
        try {
            const { id } = req.params;
            const find = await courseSectionContentModel.getContentById(parseInt(id));
            if (!find) {
                return res.status(404).json({
                    status: false,
                    message: "Content not found",
                });
            }

            await courseSectionContentModel.destroyContent(parseInt(id));
            res.status(200).json({
                status: true,
                message: "Success",
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