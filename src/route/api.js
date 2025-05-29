import express from "express";
import coursesController from "../controllers/coursesController.js";
import coursesListController from "../controllers/courseListController.js";
import usersController from "../controllers/usersController.js";

const appRouter = express.Router();

appRouter.get('/course', coursesController.getAllCourses)
appRouter.get('/users', usersController.getAllUser);

appRouter.post('/', coursesListController.create);         
appRouter.get('/', coursesListController.getAll);          
appRouter.get('/:id', coursesListController.getById);      
appRouter.put('/:id', coursesListController.update);     
appRouter.delete('/:id', coursesListController.delete);   

export default appRouter;
