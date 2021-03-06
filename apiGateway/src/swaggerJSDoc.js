const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// Create global app objects
const app = express();

// Swagger definition
const swaggerDefinition = {
    info: {
        title: 'REST API for my App', // Title of the documentation
        version: '1.0.0', // Version of the app
        description: 'This is the REST API for my product', // short description of the app
    },
    host: 'localhost:3000', // the host or url of the app
    basePath: '/api', // the basepath of your endpoint
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition,
    // path to the API docs
    apis: ['./docs/**/*.yaml'],
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// use swagger-Ui-express for your app documentation endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
