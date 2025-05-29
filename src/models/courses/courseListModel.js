import { prisma } from "../../db/config.js";

export const getAllCourses = async () => {
  return await prisma.courses.findMany({
    include: {
      user: true,
      category: true,
      courseSections: true,
      userEnrollment: true
    }
  });
};

export const getCourseById = async (id) => {
  return await prisma.courses.findUnique({
    where: { id: Number(id) },
    include: {
      user: true,
      category: true,
      courseSections: true,
      userEnrollment: true
    }
  });
};

export const createCourse = async (data) => {
  return await prisma.courses.create({
    data: {
      title: data.title,
      image: data.image,
      description: data.description,
      user: { connect: { id: data.user_id } },
      category: { connect: { id: data.category_id } }
    }
  });
};

export const updateCourse = async (id, data) => {
  return await prisma.courses.update({
    where: { id: Number(id) },
    data: {
      title: data.title,
      image: data.image,
      description: data.description,
      category: { connect: { id: data.category_id } },
      updated_at: new Date()
    }
  });
};

export const deleteCourse = async (id) => {
  return await prisma.courses.delete({
    where: { id: Number(id) }
  });
};
