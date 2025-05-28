import categoryModel from "../model/categoryModel.js";
import categorySchema from "../validation/categoryValidation.js";

const categoryController = {
    async getAllCategories(req, res) {
        try {
            const categories = await categoryModel.getAll();
            res.status(200).json({
                success: true,
                message: "Get All Categories Successfully",
                data: categories,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    },
    async createCategory(req, res) {
        try {
            const { name } = req.body;
            const find = categoryModel.getByName(name);
            if (find) {
                return res.status(409).json({
                    success: false,
                    message: "Category already exists",
                });
            }
            const { error } = categorySchema.create.validate({ name }, {
                abortEarly: false,
            }
            );
            if (error) {
                const validationError = error.details.map((err) => ({
                    field: err.path[0],
                    message: err.message,
                }));
                return res.status(422).json({
                    success: false,
                    message: "Validation Error",
                    errors: validationError,
                })
            }
            await categoryModel.createCategory(name);
            return res.status(201).json({
                success: true,
                message: "Category created successfully",
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const find = await categoryModel.getByName(name);
            if (find) {
                return res.status(409).json({
                    success: false,
                    message: "Category already exists",
                });
            }
            const { error } = categorySchema.update.validate({ name }, {
                abortEarly: false,
            }
            );
            if (error) {
                const validationError = error.details.map((err) => ({
                    field: err.path[0],
                    message: err.message,
                }));
                return res.status(422).json({
                    success: false,
                    message: "Validation Error",
                    errors: validationError,
                })
            }
            await categoryModel.update(parseInt(id), { name });
            return res.status(200).json({
                success: true,
                message: "Category updated successfully",
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    },
    async delete(id) {
        try {
            const find = await categoryModel.getById(parseInt(id));
            if (!find) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found",
                });
            }
            await categoryModel.delete(parseInt(id));
            return res.status(200).json({
                success: true,
                message: "Category deleted successfully",
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }
};

export default categoryController;
