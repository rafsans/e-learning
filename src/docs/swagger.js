import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-Learning API',
      version: '1.0.0',
      description: 'API dokumentasi untuk sistem E-Learning',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Local server',
      },
    ],
  },
  apis: ['./src/docs/*.yaml'], // nanti kita buat file YAML di sini
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
