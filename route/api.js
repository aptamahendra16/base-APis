import express from 'express';
const sh = express.Router();

import { igApi } from 'insta-fetcher';

let ig = new igApi(""); // Cookie instagram.com

/* Response messages */
const creator = 'https://github.com/xznsenpai';
const noLinkMessage = {
  creator: creator,
  message: 'Mohon maaf, tidak ada URL yang dimasukkan ke dalam.'
};
const noUserMessage = {
  creator: creator,
  message: 'Mohon maaf, tidak ada USER yang dimasukkan ke dalam.'
};
const errorMessage = {
  creator: creator,
  message: 'Maaf, terjadi kesalahan internal pada server. Silakan coba lagi nanti atau hubungi tim dukungan teknis.'
};

/* Fetch Instagram API with full details and simplified JSON metadata */
sh.get('/instagram', async (req, res) => {
  if (!req.query.url) return res.status(400).json(noLinkMessage);
  try {
    const v = await ig.fetchPost(req.query.url);
    res.status(200).json({
      creator: creator,
      ...v
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(errorMessage);
  }
});

sh.post('/instagram', async (req, res) => {
  if (!req.body.url) return res.status(400).json(noLinkMessage);
  try {
    const v = await ig.fetchPost(req.body.url);
    res.status(200).json({
      creator: creator,
      ...v
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(errorMessage);
  }
});

export default sh;
/*
penulis: https://github.com/xznsenpai
*/
