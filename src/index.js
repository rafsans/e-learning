import express from "express";
import routes from './route/api.js';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/', routes);

app.use('/api-docs', swaggerUi.serve, (req, res, next) => {
  const swaggerDocument = yaml.load('./src/docs/api.yaml');
  swaggerUi.setup(swaggerDocument)(req, res, next);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
