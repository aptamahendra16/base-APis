import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import express from 'express';

const sh = express.Router();

sh.use(express.json());
sh.use(express.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "insta-fetcher API Documentation",
      version: "1.0.0",
    },
  },
  apis: ["./route/*.js"],
};

/**
 * @swagger
 * tags:
 *   name: insta-fetcher
 *   description: Fetch instagram api with full details and simplified json metadata
 */

/**
 * @swagger
 * /api/instagram:
 *   get:
 *     summary: Fetch instagram api with full details and simplified json metadata
 *     tags: [insta-fetcher]
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *           format: url
 *         required: true
 *         description: input url instagram
 *     responses:
 *       200:
 *         description: Request berhasil dieksekusi dengan sukses.
 *       404:
 *          description: Data tidak ditemukan atau endpoint tidak valid.
 */
/**
 * @swagger
 * /api/instagram:
 *   post:
 *     summary: Fetch instagram api with full details and simplified json metadata	
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
 *                 example: "https://www.instagram.com/p/C2Tf_XuPCH8/?igsh=MTI4ampneGNsbTZxaA=="
 *                 description: Fetch instagram api with full details and simplified json metadata
 * 
 *     responses:
 *       200:
 *         description: Request berhasil dieksekusi dengan sukses.
 *       404:
 *          description: Data tidak ditemukan atau endpoint tidak valid.
 */

const swaggerDoc = swaggerJSDoc(options);
sh.use("/playground", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default sh;
/*
penulis: https://github.com/xznsenpai
*/
