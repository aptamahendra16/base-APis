const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const express = require('express');
const sh = express.Router();

sh.use(express.json());
sh.use(express.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'dnmAPI',
      version: '024.02.05',
    },
  },
  apis: ['./route/*.js'],
};

/**
 * @swagger
 * tags:
 *   name: Downloader
 */

/**
 * @swagger
 * /api/instagram:
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
 *         description: Input URL for MediaFire
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
