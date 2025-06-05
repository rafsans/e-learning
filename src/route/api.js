import express from "express";
import AuthController from '../controllers/AuthController.js';
import categoryController from "../controllers/categoryController.js";
import { getAllCourses, singleCourse, createCourse, updateCourse, destroyCourse } from "../controllers/coursesController.js";
import authMiddleware from "../middleware/authMiddleware.js";
// import coursesListController from "../controllers/courseListController.js";
// import usersController from "../controllers/usersController.js";
// import courseSectionController from "../controllers/courseSectionController.js";
// import courseContentController from "../controllers/courseContentController.js";

const appRouter = express.Router();

// appRouter.get('/users', usersController.getAllUser)

// Courses List
// appRouter.post('/coursesList', coursesListController.create);
// appRouter.get('/coursesList', coursesListController.getAll);
// appRouter.get('/coursesList/:id', coursesListController.getById);
// appRouter.put('/coursesList/:id', coursesListController.update);
// appRouter.delete('/coursesList/:id', coursesListController.delete);

// // Course Sections
// appRouter.get('/courseSection', courseSectionController.getAllCourseSections)
// appRouter.get('/courseSection/:id', courseSectionController.getCourseSectionById)
// appRouter.post('/courseSection', courseSectionController.post)
// appRouter.put('/courseSection/:id', courseSectionController.put)
// appRouter.delete('/courseSection/:id', courseSectionController.destroy)

// // Course Content
// appRouter.get('/courseContent/:id', courseContentController.getById);
// appRouter.post('/courseContent', courseContentController.create);
// appRouter.put('/courseContent/:id', courseContentController.update);
// appRouter.delete('/courseContent/:id', courseContentController.destroy);



// Auth
appRouter.post('/register', AuthController.register);
appRouter.post('/login', AuthController.login);

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


export default appRouter;
