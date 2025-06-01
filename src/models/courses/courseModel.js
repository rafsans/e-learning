import { prisma } from "../../db/config.js";

const courseModel = {
    async getAllCourses() {
        try {
            return await prisma.courses.findMany();
        } catch (error) {
            console.error("Error fetching courses:", error);
            throw error;
        }
    },

    async getCourseContent(id) {
        try {
            return await prisma.courseSectionContent.findUnique({
                where: id
            })
        } catch (error) {
            console.error("Error fetching course content:", error);
            throw error;
        }
    },

    async getByFilter(category) {
        try {
            return await prisma.courseSectionContent.findMany({
                where: category
            });
        } catch (error) {
            console.error("Error fetching course content:", error);
            throw error;
        }
    },
}

export default courseModel;