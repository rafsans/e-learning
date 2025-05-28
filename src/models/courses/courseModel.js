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
    async getCourseById (id) {
        return await prisma.courses.findFirst({
            where : {id}
        })
    },
    async post (data){
        return await prisma.courses.create({data})
    },
    async put(id, data){
        return await prisma.courses.update({
            where : {id},
            data
        })
    },

    async destroy(id){
        return await prisma.courses.delete({
            where : {id}
        })
    }
}

export default courseModel;