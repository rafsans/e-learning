import prisma from "../db/config.js";

const courseSectionContentModel = {
    async getAllContent(section_id) {
        return await prisma.courseSectionContent.findMany({
            where: {
                section_id
            }
        });
    },

    async getContentById(id) {
        return await prisma.courseSectionContent.findUnique({
            where: {
                id
            }
        });
    },

    async createContent(data) {
        return await prisma.courseSectionContent.create({
            data: { ...data }
        });
    },

    async updateContent(id, data) {
        return await prisma.courseSectionContent.update({
            where: {
                id
            },
            data: { ...data }
        });
    },

    async destroyContent(id) {
        return await prisma.courseSectionContent.delete({
            where: {
                id
            }
        });
    }
}

export default courseSectionContentModel;