import express from "express";
const app = express();
const port = 300;
import authRoute from './route/authRoute.js';

app.use(express.json());
app.use('/api/auth', authRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
