import express from "express";
import coursesController from "../controllers/coursesController.js";
import coursesListController from "../controllers/courseListController.js";
import usersController from "../controllers/usersController.js";
import AuthController from '../controllers/AuthController.js';
const appRouter = express.Router();

appRouter.get('/course', coursesController.getAllCourses)
appRouter.get('/users', usersController.getAllUser);

// Courses List
appRouter.post('/courses', coursesListController.create);     
appRouter.get('/courses', coursesListController.getAll);   
appRouter.get('/courses/:id', coursesListController.getById);  
appRouter.put('/courses/:id', coursesListController.update);    
appRouter.delete('/courses/:id', coursesListController.delete);   
 

// Auth
appRouter.post('/register', AuthController.register);
appRouter.post('/login', AuthController.login);

export default appRouter;
