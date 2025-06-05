import prisma from "../db/config.js";

const courseModel = {
    async getAllCourses() {
        return await prisma.courses.findMany();
    },
    async getCourseById(id) {
        return await prisma.courses.findUnique({ where: { id } });
    },
    async post(data) {
        return await prisma.courses.create({ data });
    },
    async put(id, data) {
        return await prisma.courses.update({ where: { id }, data });
    },
    async delete(id) {
        return await prisma.courses.delete({ where: { id } });
    };
}

export default courseModel;