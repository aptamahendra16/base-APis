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
      title: 'insta-fetcher API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./route/*.js'],
};

/**
 * @swagger
 * tags:
 *   name: insta-fetcher
 *   description: Fetch Instagram API with full details and simplified JSON metadata
 */

/**
 * @swagger
 * /api/instagram:
 *   get:
 *     summary: Fetch Instagram API with full details and simplified JSON metadata
 *     tags: [insta-fetcher]
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
 * /api/instagram:
 *   post:
 *     summary: Fetch Instagram API with full details and simplified JSON metadata	
 *     tags: [insta-fetcher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 format: url
 *                 example: 'https://www.instagram.com/p/C2Tf_XuPCH8/?igsh=MTI4ampneGNsbTZxaA=='
 *                 description: Fetch Instagram API with full details and simplified JSON metadata
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
