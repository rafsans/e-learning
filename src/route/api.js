import express from "express";
import coursesController from "../controllers/coursesController.js";
import coursesListController from "../controllers/courseListController.js";
import usersController from "../controllers/usersController.js";
import AuthController from '../controllers/AuthController.js';
import courseSectionController from "../controllers/courseSectionController.js";
import courseContentController from "../controllers/courseContentController.js";

const appRouter = express.Router();

appRouter.get('/users', usersController.getAllUser)

// Courses List
appRouter.post('/coursesList', coursesListController.create);
appRouter.get('/coursesList', coursesListController.getAll);
appRouter.get('/coursesList/:id', coursesListController.getById);
appRouter.put('/coursesList/:id', coursesListController.update);
appRouter.delete('/coursesList/:id', coursesListController.delete);

// Course Sections
appRouter.get('/courseSection', courseSectionController.getAllCourseSections)
appRouter.get('/courseSection/:id', courseSectionController.getCourseSectionById)
appRouter.post('/courseSection', courseSectionController.post)
appRouter.put('/courseSection/:id', courseSectionController.put)
appRouter.delete('/courseSection/:id', courseSectionController.destroy)

// Course Content
appRouter.get('/courseContent/:id', courseContentController.getById);
appRouter.post('/courseContent', courseContentController.create);
appRouter.put('/courseContent/:id', courseContentController.update);
appRouter.delete('/courseContent/:id', courseContentController.destroy);

// Course
appRouter.get('/course', coursesController.getAllCourses)
appRouter.get('/course/:id', coursesController.getById)
appRouter.post('/course', coursesController.post)
appRouter.put('/course/:id', coursesController.put)
appRouter.delete('/course/:id', coursesController.destroy);

// Auth
appRouter.post('/register', AuthController.register);
appRouter.post('/login', AuthController.login);

export default appRouter;
