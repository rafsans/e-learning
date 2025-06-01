import { prisma } from "../../db/config.js";

const courseModel = {
    getAllCourses: async () => await prisma.courses.findMany(),
    getCourseById: async (id) => await prisma.courses.findUnique({ where: { id } }),
    post: async (body) => await prisma.courses.create({ data: body }),
    put: async (id, body) => await prisma.courses.update({ where: { id }, data: body }),
    delete: async (id) => await prisma.courses.delete({ where: { id } }),
};

export default courseModel;