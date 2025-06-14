import usersModel from "../models/usersModel.js";
import userSchema from "../validation/userValidation.js";

const userController = {

    async getAllUser(req, res) {
        try {
            const users = await usersModel.getAll();
            res.status(200).json({
                status: true,
                message: "Success",
                data: users
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    },

    async getUserById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const find = await usersModel.getById(id);
            if(!find) {
                return res.status(404).json({
                    status: false,
                    message: "User not found",
                });
            }

            const user = await usersModel.getById(id);
            res.status(200).json({
                status: true,
                message: "Success",
                data: user
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    },

    async createUser(req, res) {
        try {
            const { error } = userSchema.create.validate(req.body, {
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
                });
            }

            const find = await usersModel.getByEmail(req.body.email);
            if(find !== null) {
                return res.status(409).json({
                    success: false,
                    message: "Email already exists",
                });
            }

            await usersModel.create(req.body);
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

    async updateUser(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { error } = userSchema.update.validate(req.body, {
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
                });
            }

            const findId = await usersModel.getById(id);
            if(!findId) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }

            const find = await usersModel.getByEmail(req.body.email);
            if(find !== null) {
                return res.status(409).json({
                    success: false,
                    message: "Email already exists",
                });
            }

            await usersModel.update(id, req.body);
            res.status(200).json({
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

    async deleteUser(req, res) {
        try {
            const id = parseInt(req.params.id);
            const find = await usersModel.getById(id);
            if(!find) {
                return res.status(404).json({
                    status: false,
                    message: "User not found",
                });
            }

            await usersModel.delete(id);
            return res.status(200).json({
                status: true,
                message: "Success",
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal Server Error" ,
            });
        }
    }
}

export default userController;