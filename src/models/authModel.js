import prisma from "../db/config.js";

const authModel = {
    async register(user) {
        return await prisma.users.create({
            data: { ...user }
        });
    },
    async getByEmail(email) {
        return await prisma.users.findUnique({
            where: {
                email: email
            }
        });
    },
    async login(email) {
        return await prisma.users.findUnique({
            where: {
                email: email
            }
        });
    },
}

export default authModel;