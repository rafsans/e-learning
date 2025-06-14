import prisma from "../db/config.js";

const categoryModel = {
    async getAll() {
        return await prisma.category.findMany({
            where: {
                deleted_at: null
            }
        });
    },
    async getById(id) {
        return await prisma.category.findUnique({
            where: {
                id,
                deleted_at: null
            },
            include:{
                courses: true
            }
        });
    },
    async getByName(name) {
        return await prisma.category.findUnique({
            where: {
                name,
                deleted_at: null
            }
        });
    },
    async create(data) {
        return await prisma.category.create({
            data: { ...data }
        });
    },
    async update(id, data) {
        const category = await prisma.category.update({
            where: {
                id,
                deleted_at: null
            },
            data: { ...data }
        });
        return category;
    },
    async delete(id) {
        const category = await prisma.category.update({
            where: {
                id
            },
            data: {
                deleted_at: new Date()
            }
        });
        return category;
    }
}

export default categoryModel;