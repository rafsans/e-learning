import prisma from "../db/config.js";

const categoryModel = {
    async getAll() {
        const categories = await prisma.category.findMany();
        return categories;
    },
    async getById(id) {
        return await prisma.category.findUnique({
            where: {
                id
            }
        });
    },
    async getByName(name) {
        return await prisma.category.findUnique({
            where: {
                name
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
                id
            },
            data: { ...data }
        });
        return category;
    },
    async delete(id) {
        const category = await prisma.category.delete({
            where: {
                id
            }
        });
        return category;
    }
}

export default categoryModel;