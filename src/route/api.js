import express from "express";
import AuthController from '../controllers/AuthController.js';
import categoryController from "../controllers/categoryController.js";
import { getAllCourses, singleCourse, createCourse, updateCourse, destroyCourse } from "../controllers/coursesController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { getAllCourseSections, getCourseSectionById, createCourseSection, updateCourseSection, destroyCourseSection } from "../controllers/courseSectionController.js";
import userController from "../controllers/usersController.js";
import contentController from "../controllers/courseSectionContentController.js";
import usersEnrollmentController from "../controllers/usersEnrollmentController.js";

const appRouter = express.Router();


// Auth
appRouter.post('/register', AuthController.register);
appRouter.post('/login', AuthController.login);

// User
appRouter.get('/users', authMiddleware.verifyToken, userController.getAllUser);
appRouter.get('/users/:id', authMiddleware.verifyToken, userController.getUserById);
appRouter.post('/users', authMiddleware.verifyToken, userController.createUser);
appRouter.put('/users/:id', authMiddleware.verifyToken, userController.updateUser);
appRouter.delete('/users/:id', authMiddleware.verifyToken, userController.deleteUser);

//Category
appRouter.get('/category', categoryController.getAllCategories);
// appRouter.get('/category/:id', categoryController.getCategoryById);
appRouter.post('/category', categoryController.createCategory);
appRouter.put('/category/:id', categoryController.updateCategory);
appRouter.delete('/category/:id', categoryController.deleteCategory);

// Course
appRouter.get('/course', authMiddleware.verifyToken, getAllCourses)
appRouter.get('/course/:id', authMiddleware.verifyToken, singleCourse)
appRouter.post('/course', authMiddleware.verifyToken, createCourse)
appRouter.put('/course/:id', authMiddleware.verifyToken, updateCourse)
appRouter.delete('/course/:id', authMiddleware.verifyToken, destroyCourse);

// // Course Sections
appRouter.get('/course-section/:course_id',authMiddleware.verifyToken, getAllCourseSections)
// appRouter.get('/courseSection/:id', getCourseSectionById)
appRouter.post('/course-section/:course_id',authMiddleware.verifyToken, createCourseSection)
appRouter.put('/course-section/:id',authMiddleware.verifyToken, updateCourseSection)
appRouter.delete('/course-section/:id',authMiddleware.verifyToken, destroyCourseSection)

// Course Section Content
appRouter.get('/course-section-content/:section_id', authMiddleware.verifyToken, contentController.getAllContent)
appRouter.post('/course-section-content/:section_id', authMiddleware.verifyToken, contentController.createContent)
appRouter.put('/course-section-content/:id', authMiddleware.verifyToken, contentController.updateContent)
appRouter.delete('/course-section-content/:id', authMiddleware.verifyToken, contentController.deleteContent)

appRouter.get('/course-enrollment', authMiddleware.verifyToken, usersEnrollmentController.getAllEnrollment)
appRouter.post('/course-enrollment', authMiddleware.verifyToken, usersEnrollmentController.addEnrollment)
// approutes.put('/course-enrollment/:id', authMiddleware.verifyToken, courseEnrollmentController.updateEnrollment)
// approutes.delete('/course-enrollment/:id', authMiddleware.verifyToken, courseEnrollmentController.deleteEnrollment)



export default appRouter;
