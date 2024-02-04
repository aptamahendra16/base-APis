const express = require('express');
const sh = express.Router();

const { igApi } = require('insta-fetcher');
const ig = new igApi(`ig_nrcb=1; ds_user_id=8966198065; csrftoken=c4-X8fYp935CViUoyarZ6u; mid=ZanQ0AALAAFYA5--I766YHOfgPch; fbm_124024574287414=base_domain=.instagram.com; ig_did=536D524D-DE87-468C-973A-B6E277CF4229; datr=0NCpZcOGZIPLkzJvQ7nq3oSA; ps_n=0; ps_l=0; dpr=1.25; sessionid=8966198065%3AnFkQQP1cFMppO1%3A24%3AAYfY0ae7Kh4s_F4KJ10J1aPoLVG9Ves5998aYKJ5Ww; shbid="6077\0548966198065\0541738549766:01f7736485505d90e94f45d8d4fbf733dca483f29b271f5d4e5f3726fde8178ec5fcdb3d"; shbts="1707013766\0548966198065\0541738549766:01f7cd62f4fee985669c34a6f599c4d52e388ef4a31e584c29a9c57e98f37f63388485a2"; rur="EAG\0548966198065\0541738580437:01f714b3bae49e9aea371644d037a19198540eeb194b0a98c8fbc940a3cb7114a6783da5"`); // Cookie instagram.com

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

sh.post('/instagram', async (req, res) => {
  if (!req.body.url) return res.status(400).json(noLinkMessage);

  ig.fetchPost(req.body.url)
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
