import prisma from "../db/config.js";

const usersModel = {
    async getAllUser() {
        try {
            return await prisma.users.findMany();
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }
}

export default usersModel;