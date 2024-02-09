const express = require('express');
const sh = express.Router();
const { simtalk } = require('simsimi-api');
const { pinterest, googleImage, wallpaper } = require('@bochilteam/scraper');

const creator = 'dnm.my.id';

const noLinkMessage = {
  creator: creator,
  message: 'Sorry, no URL / text was entered in.'
};

const errorMessage = {
  creator: creator,
  message: 'Sorry, there was an internal error on the server. Please try again later or contact the technical support team.'
};

sh.get('/simtalk', async (req, res) => {
  if (!req.query.text) {
    const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
    return res.status(400).send(stringifiedNoLinkMessage);
  }

  simtalk(req.query.text, 'id')
    .then((result) => {
      const stringifiedResult = JSON.stringify({
        creator: creator,
        ...result,
        credit: 'Leanhtruonggggg'
      }, (key, value) => (value === undefined ? null : value), 2);

      res.status(200).send(stringifiedResult);
    })
    .catch((error) => {
      console.log(error);
      const jsonerrorMessage = JSON.stringify(errorMessage, null, 2)
      res.status(500).send(jsonerrorMessage);
    });
});

sh.get('/pinterest', async (req, res) => {
  if (!req.query.text) {
    const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
    return res.status(400).send(stringifiedNoLinkMessage);
  }

  pinterest(req.query.text)
    .then((result) => {
      const stringifiedResult = JSON.stringify({
        creator: creator,
        ...result,
        credit: '@bochilteam'
      }, (key, value) => (value === undefined ? null : value), 2);

      res.status(200).send(stringifiedResult);
    })
    .catch((error) => {
      console.log(error);
      const jsonerrorMessage = JSON.stringify(errorMessage, null, 2)
      res.status(500).send(jsonerrorMessage);
    });
});

sh.get('/googleImage', async (req, res) => {
  if (!req.query.text) {
    const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
    return res.status(400).send(stringifiedNoLinkMessage);
  }

  googleImage(req.query.text)
    .then((result) => {
      const stringifiedResult = JSON.stringify({
        creator: creator,
        ...result,
        credit: '@bochilteam'
      }, (key, value) => (value === undefined ? null : value), 2);

      res.status(200).send(stringifiedResult);
    })
    .catch((error) => {
      console.log(error);
      const jsonerrorMessage = JSON.stringify(errorMessage, null, 2)
      res.status(500).send(jsonerrorMessage);
    });
});

sh.get('/wallpaper', async (req, res) => {
  if (!req.query.text) {
    const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
    return res.status(400).send(stringifiedNoLinkMessage);
  }

  wallpaper(req.query.text)
    .then((result) => {
      const stringifiedResult = JSON.stringify({
        creator: creator,
        ...result,
        credit: '@bochilteam'
      }, (key, value) => (value === undefined ? null : value), 2);

      res.status(200).send(stringifiedResult);
    })
    .catch((error) => {
      console.log(error);
      const jsonerrorMessage = JSON.stringify(errorMessage, null, 2)
      res.status(500).send(jsonerrorMessage);
    });
});

module.exports = sh;
