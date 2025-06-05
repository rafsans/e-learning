import usersModel from "../models/usersModel.js";

const getAllUser = async (req, res) => {
    try {
        const users = await usersModel.getAllUser();
        res.status(200).json({
            status: "success",
            message: "Users fetched successfully",
            data: users
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default { getAllUser };