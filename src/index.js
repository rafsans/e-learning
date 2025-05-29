import express from "express";
const app = express();
const port = 300;
import authRoute from './route/authRoute.js';
import App from "./app/app.js";
const appInstance = new App();

import courseRoute from './route/api.js';
app.use('/api/courses', courseRoute);

app.use(express.json());
app.use('/api/auth', authRoute);

appInstance.start(); // penting!