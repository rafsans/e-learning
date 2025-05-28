import courseModel from "../models/courses/courseModel.js";

const getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.getAllCourses();
    res.status(200).json({
      status: "success",
      message: "Courses fetched successfully",
      data: courses,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await courseModel.getCourseById(parseInt(id));
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({
      status: "success",
      message: "Course fetched successfully",
      data: course,
    });
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const post = async (req, res) => {
  const body = req.body;
  try {
    const postBody = await courseModel.post(body);

    res.status(200).json({
      status: "success",
      message: "Course fetched successfully",
      data: postBody,
    });
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const put = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const updateCourse = await courseModel.put(parseInt(id), body);
        res.status(200).json({
            status: "success",
            message: "Course fetched successfully",
            data: updateCourse,
          });
    } catch (error) {
        console.error("Error fetching course:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
}

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteCourse = await courseModel.delete(parseInt(id));
        res.status(200).json({
            status: "success",
            message: "Course fetched successfully"
          });
    } catch (error) {
        console.error("Error fetching course:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
}

export default { getAllCourses, getById, post, put, destroy };
