import config from "../config.js";

const categoryModel = {
    async getAll() {
        const categories = await config.category.findMany();
        return categories;
    },
    async getById(id) {
        const category = await config.category.findUnique({
            where: {
                id
            }
        });
        return category;
    },
    async getByName(name) {
        const category = await config.category.findUnique({
            where: {
                name
            }
        });
        return category;
    },
    async create(data) {
        const category = await config.category.create({
            data: { ...data }
        });
        return data;
    },
    async update(id, data) {
        const category = await config.category.update({
            where: {
                id
            },
            data: { ...data }
        });
        return category;
    },
    async delete(id) {
        const category = await config.category.delete({
            where: {
                id
            }
        });
        return category;
    }
}

export default categoryModel;