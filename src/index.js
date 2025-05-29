import express from "express";
const app = express();
const port = 300;
import authRoute from './route/authRoute.js';

app.use(express.json());
app.use('/api/auth', authRoute);
import App from "./app/app.js";

const appInstance = new App();
appInstance.start(); // penting!