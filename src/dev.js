import express from "express";
import routes from './route/api.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';

const port = 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/', routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
    console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
