import express from "express";
import coursesController from "../controllers/coursesController.js";

const appRouter = express.Router();

appRouter.get("/", (req, res) => {
  res.send("Salamat Thanks!ssss");
});
appRouter.get('/course', coursesController.getAllCourses)
appRouter.get('/course/:id', coursesController.getById)
appRouter.post('/course', coursesController.post)
appRouter.put('/course/:id', coursesController.put)
appRouter.delete('/course/:id', coursesController.destroy)

export default appRouter;
