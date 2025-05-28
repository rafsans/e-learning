import express from "express";
import coursesController from "../controllers/coursesController.js";

const appRouter = express.Router();

appRouter.get("/", (req, res) => {
  res.send("Salamat Thanks!ssss");
});
appRouter.get('/course', coursesController.getAllCourses)

export default appRouter;
