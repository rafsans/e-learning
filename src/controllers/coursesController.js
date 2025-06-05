import courseModel from "../models/courseModel.js";
import courseSchema from "../validation/courseValidation.js";
import imageServices from "../services/imageServices.js";

const getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.getAllCourses();
    res.status(200).json({
      status: true,
      message: "Courses fetched successfully",
      data: courses,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

const singleCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseModel.getCourseById(parseInt(id));
    if (!course) {
      return res.status(404).json({ status: false, message: "Course not found" });
    }
    res.status(200).json({
      status: true,
      message: "Course fetched successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

const createCourse = async (req, res) => {
  try {
    const body = req.body;
    const image = await imageServices.uploadImage(body.image, 'courses');
    const data = {
      user_id: req.user.id,
      category_id: parseInt(body.category_id),
      title: body.title,
      image: image,
      description: body.description
    }
    const { error } = courseSchema.create.validate(body, {
      abortEarly: false,
    }
    );
    if (error) {
      const validationError = error.details.map((err) => ({
        field: err.path[0],
        message: err.message,
      }));
      return res.status(422).json({
        success: false,
        message: "Validation Error",
        errors: validationError,
      })
    }
    await courseModel.create(data);
    res.status(201).json({
      status: true,
      message: "Course created successfully",
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error", data: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const { error } = courseSchema.update.validate(body, {
      abortEarly: false,
    });
    if (error) {
      const validationError = error.details.map((err) => ({
        field: err.path[0],
        message: err.message,
      }));
      return res.status(422).json({
        success: false,
        message: "Validation Error",
        errors: validationError,
      })
    }
    await courseModel.update(parseInt(id), body);
    res.status(200).json({
      status: true,
      message: "Course updated successfully",
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
}

const destroyCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const find = await courseModel.getCourseById(parseInt(id));
    if (!find) {
      return res.status(404).json({
        status: false,
        message: "Course not found",
      });
    }
    await courseModel.delete(parseInt(id));
    res.status(200).json({
      status: true,
      message: "Course deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
}

export { getAllCourses, singleCourse, createCourse, updateCourse, destroyCourse };


