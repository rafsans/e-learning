import prisma from "../db/config.js";

const usersModel = {
    async getAll() {
        const users = await prisma.users.findMany();
        return users;
    },

    async getById(id) {
        const user = await prisma.users.findUnique({
            where: {
                id
            }
        });
        return user;
    },

    async getByEmail(email) {
        const user = await prisma.users.findUnique({
            where: {
                email
            }
        });
        return user;
    },

    async create(data) {
        return await prisma.users.create({
            data: { ...data }
        });
    },

    async update(id, data) {
        const user = await prisma.users.update({
            where: {
                id
            },
            data: { ...data }
        });
        return user;
    },

    async delete(id) {
        const user = await prisma.users.delete({
            where: {
                id
            }
        });
        return user;
    },
}

export default usersModel;