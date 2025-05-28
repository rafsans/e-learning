import express from "express";
import coursesController from "../controllers/coursesController.js";
import courseSectionController from "../controllers/courseSectionController.js";

const appRouter = express.Router();

appRouter.use(express.json()); 

appRouter.get("/", (req, res) => {
  res.send("Conected to API");
});
// Define routes for courses
appRouter.get('/course', coursesController.getAllCourses)
appRouter.get('/course/:id', coursesController.getById)
appRouter.post('/course', coursesController.post)
appRouter.put('/course/:id', coursesController.put)
appRouter.delete('/course/:id', coursesController.destroy)

// Define routes for course sections
appRouter.get('/courseSection', courseSectionController.getAllCourseSections)
appRouter.get('/courseSection/:id', courseSectionController.getCourseSectionById)
appRouter.post('/courseSection', courseSectionController.post)
appRouter.put('/courseSection/:id', courseSectionController.put)
appRouter.delete('/courseSection/:id', courseSectionController.destroy)



export default appRouter;
