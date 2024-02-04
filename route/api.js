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
    const jsonnoLinkMessage = JSON.stringify(noLinkMessage, null, 2)
  if (!req.query.url) return res.status(400).send(jsonnoLinkMessage);

  ig.fetchPost(req.query.url)
    .then((result) => {
        const stringifiedResult = JSON.stringify({
            creator: creator,
            ...result
        }, (key, value) => (value === undefined ? null : value), 2)

      res.status(200).send(stringifiedResult);
    })
    .catch((error) => {
      console.log(error);
      const jsonerrorMessage = JSON.stringify(errorMessage, null, 2)
      res.status(500).json(jsonerrorMessage);
    });
});

module.exports = sh;
/*
Author: https://github.com/xznsenpai
*/
