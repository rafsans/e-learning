import express from "express";
import authRoute from './route/api.js';
import courseRoute from './route/api.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/', courseRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
