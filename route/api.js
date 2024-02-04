const express = require('express');
const sh = express.Router();

const { igApi } = require('insta-fetcher');
const ig = new igApi(""); // Cookie instagram.com

/* Response messages */
const creator = 'https://github.com/xznsenpai';
const noLinkMessage = {
  creator: creator,
  message: 'Sorry, no URL was entered in.'
};
const noUserMessage = {
  creator: creator,
  message: 'Sorry, no USER was entered in.'
};
const errorMessage = {
  creator: creator,
  message: 'Sorry, there was an internal error on the server. Please try again later or contact the technical support team.'
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
