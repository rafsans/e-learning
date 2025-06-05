import express from "express";
import AuthController from '../controllers/AuthController.js';
import categoryController from "../controllers/categoryController.js";
import { getAllCourses, singleCourse, createCourse, updateCourse, destroyCourse } from "../controllers/coursesController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { getAllCourseSections, getCourseSectionById, createCourseSection, updateCourseSection, destroyCourseSection } from "../controllers/courseSectionController.js";
import userController from "../controllers/usersController.js";
// import coursesListController from "../controllers/courseListController.js";
// import usersController from "../controllers/usersController.js";
// import courseContentController from "../controllers/courseContentController.js";

const appRouter = express.Router();

// appRouter.get('/users', usersController.getAllUser)

// Courses List
// appRouter.post('/coursesList', coursesListController.create);
// appRouter.get('/coursesList', coursesListController.getAll);
// appRouter.get('/coursesList/:id', coursesListController.getById);
// appRouter.put('/coursesList/:id', coursesListController.update);
// appRouter.delete('/coursesList/:id', coursesListController.delete);



// // Course Content
// appRouter.get('/courseContent/:id', courseContentController.getById);
// appRouter.post('/courseContent', courseContentController.create);
// appRouter.put('/courseContent/:id', courseContentController.update);
// appRouter.delete('/courseContent/:id', courseContentController.destroy);



// Auth
appRouter.post('/register', AuthController.register);
appRouter.post('/login', AuthController.login);

// User
appRouter.get('/users', userController.getAllUser);
appRouter.get('/users/:id', userController.getUserById);
appRouter.post('/users', userController.createUser);
appRouter.put('/users/:id', userController.updateUser);
appRouter.delete('/users/:id', userController.deleteUser);

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


export default appRouter;
