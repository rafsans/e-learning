import App from "./app/app.js";

<<<<<<< HEAD
app.get("/", (req, res) => {
  res.send("123!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
=======
const appInstance = new App();
appInstance.start(); // penting!
>>>>>>> b0d8de3d692d1e6afa8b7261c5447abc6527a2aa
