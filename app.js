const logger = require('morgan');
const express = require("express");
const compression = require('compression')
const sh = express();

const docs = require('./route/docs');
const api = require('./route/api');
const random = require('./route/random');

sh.use(compression())
sh.use(logger('dev'));

sh.get('/', (req, res) => {
  res.redirect('/docs');
});

sh.use('/', docs);
sh.use('/api', api);
sh.use('/random', random);

sh.listen(5000, async () => {
  console.log({
    status: 'Active',
    message: 'Powered by https://github.com/xznsenpai'
  });
});
/*
Author: https://github.com/xznsenpai
*/
