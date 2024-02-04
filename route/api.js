const express = require('express');
const sh = express.Router();

const { igApi } = require('insta-fetcher');
const ig = new igApi(""); // Cookie instagram.com

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

  ig.fetchPost(req.query.url)
    .then((result) => {
      res.status(200).json({
        creator: creator,
        ...result
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(errorMessage);
    });
});

module.exports = sh;
/*
Author: https://github.com/xznsenpai
*/
