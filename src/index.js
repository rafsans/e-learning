import express from "express";
import authRoute from './route/api.js';
import courseRoute from './route/api.js';

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';

const port = 3000;
const app = express();
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/', courseRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
    console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});