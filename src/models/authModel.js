import prisma from "../db/config.js";

const authModel = {
    async register(user) {
        return await prisma.users.create({
            data: { ...user }
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