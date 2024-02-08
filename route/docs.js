const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const express = require('express');
const pkg = require('../package.json');
const sh = express.Router();
const version = pkg.version;

sh.use(express.json());
sh.use(express.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'dnmAPI',
      version: version,
      description: 'Welcome to dnmAPI!',
    },
  },
  apis: ['./route/*.js'],
};

/**
 * @swagger
 * tags:
 *   name: Downloader
 *   name: Random
 */

/**
 * @swagger
 * /api/instagram:
 * /api/facebookdl:
 * /api/tiktokdl:
 * /api/youtube:
 * /api/mediafiredl:
 *   get:
 *     tags: [Downloader]
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *           format: url
 *         required: true
 *         description: Input URL for Instagram
 *     responses:
 *       200:
 *         description: Request executed successfully.
 *       404:
 *         description: Data not found or invalid endpoint.
 */

/**
 * @swagger
 * /random/simtalk:
 *   get:
 *     tags: [Random]
 *     parameters:
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *           format: text
 *         required: true
 *         description: Input text for SimSimi
 *     responses:
 *       200:
 *         description: Request executed successfully.
 *       404:
 *         description: Data not found or invalid endpoint.
 */

const swaggerDoc = swaggerJSDoc(options);
sh.use('/playground', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
module.exports = sh;
/*
Author: https://github.com/xznsenpai
*/
