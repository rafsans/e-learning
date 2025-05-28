import express from "express";
import coursesController from "../controllers/coursesController.js";
import usersController from "../controllers/usersController.js";

const appRouter = express.Router();

appRouter.get("/", (req, res) => {
  res.send("Salamat Thanks!ssss");
});

appRouter.get('/course', coursesController.getAllCourses)
appRouter.get('/users', usersController.getAllUser);

export default appRouter;
