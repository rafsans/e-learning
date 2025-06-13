import prisma from "../db/config.js";

const usersEnrollmentModel = {
    getEnrollCourseById: async (id, course_id) => {
        return await prisma.userEnrollment.findFirst({
            where: {
                user_id: id,
                course_id: course_id
            },
        });
    },
    getAllEnrollment: async (id) => {
        return await prisma.userEnrollment.findMany({
            where: { user_id: id },
            include:{
                course: true,
            }
        });
    },
    create: async (data) => {
        return await prisma.userEnrollment.create({
            data: { ...data }
        });
    }
};

export default usersEnrollmentModel;