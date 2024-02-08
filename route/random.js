const express = require('express');
const sh = express.Router();
const { simtalk } = require('simsimi-api');

const creator = 'dnm.my.id';

const noLinkMessage = {
  creator: creator,
  message: 'Sorry, no URL was entered in.'
};

const errorMessage = {
  creator: creator,
  message: 'Sorry, there was an internal error on the server. Please try again later or contact the technical support team.'
};

sh.get('/simtalk', async (req, res) => {
  if (!req.query.url) {
    const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
    return res.status(400).send(stringifiedNoLinkMessage);
  }

  simtalk(req.query.url. 'id')
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

module.exports = sh;
