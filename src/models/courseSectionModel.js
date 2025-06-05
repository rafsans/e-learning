import prisma from "../db/config.js";
const courseSectionModel = {
    async getAllSection(id) {
        return await prisma.courseSection.findMany({
            where: {
                course_id: id 
            }
        });
    },
    async getSectionById(id) {
        return await prisma.courseSection.findFirst({
            where: { id }
        });
    },
    async createSection(data) {
        return await prisma.courseSection.create({
            data: { ...data }
        });
    },
    async updateSection(id, data) {
        return await prisma.courseSection.update({
            where:{
                id
            },
            data: { ...data }
        });
    },
    async destroySection(id) {
        return await prisma.courseSection.delete({
            where: { id }
        });
    }
};
export default courseSectionModel;