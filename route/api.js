const express = require('express');
const sh = express.Router();
const { mediafiredl, facebookdl, instagramdl, tiktokdl } = require('@bochilteam/scraper');

/* Response messages */
const creator = 'dnm.my.id';
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
    if (!req.query.url) {
        const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
        return res.status(400).send(stringifiedNoLinkMessage);
      }

  instagramdl(req.query.url)
    .then((result) => {
        const stringifiedResult = JSON.stringify({
            creator: creator,
            ...result,
            credit: '@bochilteam'
        }, (key, value) => (value === undefined ? null : value), 2)

      res.status(200).send(stringifiedResult);
    })
    .catch((error) => {
      console.log(error);
      const jsonerrorMessage = JSON.stringify(errorMessage, null, 2)
      res.status(500).send(jsonerrorMessage);
    });
});

sh.get('/facebookdl', async (req, res) => {
  if (!req.query.url) {
      const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
      return res.status(400).send(stringifiedNoLinkMessage);
    }

facebookdl(req.query.url)
  .then((result) => {
      const stringifiedResult = JSON.stringify({
          creator: creator,
          ...result,
          credit: '@bochilteam'
      }, (key, value) => (value === undefined ? null : value), 2)

    res.status(200).send(stringifiedResult);
  })
  .catch((error) => {
    console.log(error);
    const jsonerrorMessage = JSON.stringify(errorMessage, null, 2)
    res.status(500).send(jsonerrorMessage);
  });
});

sh.get('/tiktokdl', async (req, res) => {
  if (!req.query.url) {
      const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
      return res.status(400).send(stringifiedNoLinkMessage);
    }

tiktokdl(req.query.url)
  .then((result) => {
      const stringifiedResult = JSON.stringify({
          creator: creator,
          ...result,
          credit: '@bochilteam'
      }, (key, value) => (value === undefined ? null : value), 2)

    res.status(200).send(stringifiedResult);
  })
  .catch((error) => {
    console.log(error);
    const jsonerrorMessage = JSON.stringify(errorMessage, null, 2)
    res.status(500).send(jsonerrorMessage);
  });
});

sh.get('/mediafiredl', async (req, res) => {
    if (!req.query.url) {
        const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
        return res.status(400).send(stringifiedNoLinkMessage);
      }

  mediafiredl(req.query.url)
    .then((result) => {
        const stringifiedResult = JSON.stringify({
            creator: creator,
            ...result,
            credit: '@bochilteam'
        }, (key, value) => (value === undefined ? null : value), 2)

      res.status(200).send(stringifiedResult);
    })
    .catch((error) => {
      console.log(error);
      const jsonerrorMessage = JSON.stringify(errorMessage, null, 2)
      res.status(500).send(jsonerrorMessage);
    });
});

module.exports = sh;
/*
Author: https://github.com/xznsenpai
*/
