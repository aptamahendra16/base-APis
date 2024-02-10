const express = require('express');
const sh = express.Router();
const { mediafiredl, facebookdlv2 } = require('@bochilteam/scraper');
const { tiktokdl } = require('tiktokdl');
const { InstagramService } = require('@xncn/instagramdownloaderpro');
const { youtube } = require('@xct007/frieren-scraper');

const instagram = new InstagramService();
const creator = 'dnm.my.id';

const noLinkMessage = {
  creator: creator,
  message: 'Sorry, no URL was entered in.'
};

const errorMessage = {
  creator: creator,
  message: 'Sorry, there was an internal error on the server. Please try again later or contact the technical support team.'
};

sh.get('/instagram', async (req, res) => {
  if (!req.query.url) {
    const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
    return res.status(400).send(stringifiedNoLinkMessage);
  }

  instagram.downloadService.Download(req.query.url)
    .then((result) => {
      const stringifiedResult = JSON.stringify({
        ...result,
        credit: '@xncn'
      }, (key, value) => (value === undefined ? null : value), 2);

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

  facebookdlv2(req.query.url)
    .then((result) => {
      const stringifiedResult = JSON.stringify({
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

sh.get('/tiktokdl', async (req, res) => {
  if (!req.query.url) {
    const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
    return res.status(400).send(stringifiedNoLinkMessage);
  }

  tiktokdl(req.query.url)
    .then((result) => {
      const stringifiedResult = JSON.stringify({
        ...result,
        credit: 'BOTCAHX'
      }, (key, value) => (value === undefined ? null : value), 2);

      res.status(200).send(stringifiedResult);
    })
    .catch((error) => {
      console.log(error);
      const jsonerrorMessage = JSON.stringify(errorMessage, null, 2)
      res.status(500).send(jsonerrorMessage);
    });
});

sh.get('/youtube', async (req, res) => {
  if (!req.query.url) {
    const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
    return res.status(400).send(stringifiedNoLinkMessage);
  }

  youtube.download(req.query.url)
    .then((result) => {
      const stringifiedResult = JSON.stringify({
        ...result,
        credit: '@xct007'
      }, (key, value) => (value === undefined ? null : value), 2);

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
