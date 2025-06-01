import { prisma } from "../../db/config.js";

const courseContentModel = {
    async getById(id) {
        const courseContent = await prisma.courseContent.findUnique({
            where: {
                id
            }
        });
        return courseContent;
    },

    async create(data) {
        const courseContent = await prisma.courseContent.create(
            {
                data: { ...data}
            }
        );
        return courseContent;
    },

    async update(id, data) {
        const courseContent = await prisma.courseContent.update({
            where: {
                id
            },
            data: { ...data }
        });
        return courseContent;
    },

    async delete(id) {
        const courseContent = await prisma.courseContent.delete({
            where: {
                id
            }
        });
        return courseContent;
    }
};

export default courseContentModel;