import categoryModel from "../models/categoryModel.js";
import categorySchema from "../validation/categoryValidation.js";

const categoryController = {
    async getAllCategories(req, res) {
        try {
            const categories = await categoryModel.getAll();
            res.status(200).json({
                success: true,
                message: "Success",
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
            const body = req.body;
            const { error } = categorySchema.create.validate(body, {
                abortEarly: false,
            });
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
            const find = await categoryModel.getByName(body.name);
            if (find !== null) {
                return res.status(422).json({
                    success: false,
                    message: "Validation Error",
                    errors: [{ field: "name", message: "Category already exists" }],
                });
            }
            await categoryModel.create(body);
            return res.status(201).json({
                success: true,
                message: "Success",
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    },
    async updateCategory(req, res) {
        try {
            const { id } = req.params;
            const body = req.body;
            const { error } = categorySchema.update.validate(body, {
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
            const findId = await categoryModel.getById(parseInt(id));
            if (!findId) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found",
                });
            }
            const findName = await categoryModel.getByName(body.name);
            if (findName !== null) {
                return res.status(422).json({
                    success: false,
                    message: "Validation Error",
                    errors: [{ field: "name", message: "Category already exists" }],
                });
            }
            await categoryModel.update(parseInt(id), body);
            return res.status(200).json({
                success: true,
                message: "Success",
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Internal Server Error',
            });
        }
    },
    async deleteCategory(req, res) {
        try {
            const { id } = req.params;
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
                message: "Success"        
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error"
            });
        }
    }
};

export default categoryController;
