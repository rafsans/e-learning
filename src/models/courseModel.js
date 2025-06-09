import prisma from "../db/config.js";

const courseModel = {
    async getAllCourses() {
        return await prisma.courses.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                category: {
                    select: {
                        name: true
                    }
                },
            }
        });
    },
    async getCourseByTitle(title) {
        return await prisma.courses.findUnique({ where: { title } });
    },
    async getCourseById(id) {
        return await prisma.courses.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                category: {
                    select: {
                        name: true
                    }
                },
                courseSections: {
                    select: {
                        id: true,
                        title: true
                    }
                }
            }
        });
    },
    async create(data) {
        return await prisma.courses.create({
            data: { ...data }
        });
    },
    async update(id, data) {
        return await prisma.courses.update({
            where: { id },
            data: { ...data }
        });
    },
    async updateImage(id, image) {
    return await prisma.courses.update({
        where: { id },
        data: { image }
    });
},
    async delete (id) {
    await prisma.courseSection.deleteMany({ where: { course_id: id } });
    return await prisma.courses.delete({ where: { id } });
}
}

export default courseModel;