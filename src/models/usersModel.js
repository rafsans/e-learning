import prisma from "../db/config.js";

const usersModel = {
    async getAll() {
        return await prisma.users.findMany({
            where: {
                deleted_at: null
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });
    },

    async getById(id) {
        const user = await prisma.users.findUnique({
            where: {
                id,
                deleted_at: null
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });
        return user;
    },

    async getByEmail(email) {
        const user = await prisma.users.findUnique({
            where: {
                email,
                deleted_at: null
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
                id,
                deleted_at: null
            },
            data: { ...data }
        });
        return user;
    },

    async delete(id) {
        return await prisma.users.update({
            where: {
                id
            },
            data: {
                deleted_at: new Date()
            }
        });
    },
}

export default usersModel;