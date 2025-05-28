import express from "express";
import appRouter from "../route/api.js"; // pastikan ekstensi `.js`

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.routes();
  }

  routes() {
    this.app.use("/api", appRouter);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }
}

export default App;