import prisma from "../db/config.js";
const courseSectionModel = {
    async getAllSection(id) {
        return await prisma.courseSection.findMany({
            where: {
                course_id: id,
                deleted_at: null 
            }
        });
    },
    async getSectionById(id) {
        return await prisma.courseSection.findUnique({
            where: {
                id,
                deleted_at: null
            }
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
                id,
                deleted_at: null
            },
            data: { ...data }
        });
    },
    async destroySection(id) {
        return await prisma.courseSection.update({
            where: { id },
            data:{
                deleted_at: new Date()
            }
        });
    }
};
export default courseSectionModel;