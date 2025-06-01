import express from "express";
import coursesController from "../controllers/coursesController.js";


const appRouter = express.Router();

appRouter.use(express.json()); 

appRouter.get("/", (req, res) => {
  res.send("Conected to API");
});


export default appRouter;
