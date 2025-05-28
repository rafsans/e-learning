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

    async getCourseContent() {
        
    }
}

export default courseModel;