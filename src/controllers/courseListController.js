import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const CourseController = {
  create: async (req, res) => {
    try {
      const { user_id, category_id, title, image, description } = req.body;

      const course = await prisma.courses.create({
        data: {
          user_id,
          category_id,
          title,
          image,
          description,
        },
      });

      res.status(201).json({ message: 'Course berhasil dibuat', course });
    } catch (error) {
      res.status(500).json({ message: 'Gagal membuat course', error: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const courses = await prisma.courses.findMany({
        include: {
          user: true,
          category: true,
          courseSections: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      });
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ message: 'Gagal mengambil data course', error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const course = await prisma.courses.findUnique({
        where: { id: Number(id) },
        include: {
          user: true,
          category: true,
          courseSections: true,
        },
      });

      if (!course) return res.status(404).json({ message: 'Course tidak ditemukan' });

      res.status(200).json(course);
    } catch (error) {
      res.status(500).json({ message: 'Gagal mengambil detail course', error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, image, description, category_id } = req.body;

      const updatedCourse = await prisma.courses.update({
        where: { id: Number(id) },
        data: {
          title,
          image,
          description,
          category_id,
          updated_at: new Date(),
        },
      });

      res.status(200).json({ message: 'Course berhasil diperbarui', course: updatedCourse });
    } catch (error) {
      res.status(500).json({ message: 'Gagal update course', error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      await prisma.courses.delete({
        where: { id: Number(id) },
      });

      res.status(200).json({ message: 'Course berhasil dihapus' });
    } catch (error) {
      res.status(500).json({ message: 'Gagal menghapus course', error: error.message });
    }
  },
};

export default CourseController;
