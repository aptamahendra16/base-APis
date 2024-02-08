const express = require('express');
const Bard = require('bard-ai');
const sh = express.Router();
const creator = 'dnm.my.id';
const COOKIE = "g.a000gAgIgSIBsbQSjjOLbEPn45akE49msNeGp5bN1PTslNQ3s7mL42QrU9VZjE26j5nmKNk47QACgYKATYSAQASFQHGX2Mi0cioZL1vxbXXEdRFBzJLphoVAUF8yKpH2uffkccZNkfw3uokuuwy0076";
const myBard = new Bard(COOKIE);

const noLinkMessage = {
  creator: creator,
  message: 'Sorry, no URL was entered.'
};
const errorMessage = {
  creator: creator,
  message: 'Sorry, there was an internal server error. Please try again later or contact support.'
};

sh.get('/bard', async (req, res) => {
  try {
    if (!req.query.url) {
      const stringifiedNoLinkMessage = JSON.stringify(noLinkMessage, null, 2);
      return res.status(400).send(stringifiedNoLinkMessage);
    }

    myBard.ask(req.query.url)
      .then((result) => {
        const stringifiedResult = JSON.stringify({
          creator: creator,
          ...result,
          credit: '@xncn'
        }, (key, value) => (value === undefined ? null : value), 2);

        res.status(200).send(stringifiedResult);
      })
      .catch((error) => {
        console.log(error);
        const jsonErrorMessage = JSON.stringify(errorMessage, null, 2);
        res.status(500).send(jsonErrorMessage);
      });
  } catch (error) {
    console.error(error);
    const jsonErrorMessage = JSON.stringify(errorMessage, null, 2);
    res.status(500).send(jsonErrorMessage);
  }
});

module.exports = sh;
