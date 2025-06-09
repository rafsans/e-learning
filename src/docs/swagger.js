import swaggerJSDoc from 'swagger-jsdoc';
const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E - Learning API',
      version: '1.0.0',
      description: 'E - Learning API',
    },
  },
  apis: ['../docs/api.yaml'],
});
export default swaggerSpec;
