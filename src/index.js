import express from "express";
const app = express();
const port = 300;

app.get("/", (req, res) => {
  res.send("123!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
