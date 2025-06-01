import { prisma } from "../../db/config.js";
const courseSectionModel = {
    async getAllCourseSections() {
        try {
            return await prisma.courseSection.findMany();
        } catch (error) {
            console.error("Error fetching course sections:", error);
            throw error;
        }
    },
    async getCourseSectionById(id) {
        return await prisma.courseSection.findFirst({
            where: { id }
        });
    },
    async post(data) {
        return await prisma.courseSection.create({ data });
    },
    async put(id, data) {
        return await prisma.courseSection.update({
            where: { id },
            data
        });
    },
    async destroy(id) {
        return await prisma.courseSection.delete({
            where: { id }
        });
    }
};
export default courseSectionModel;