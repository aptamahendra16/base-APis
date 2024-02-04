const logger = require('morgan');
const express = require("express");
const sh = express();

const docs = require('./route/docs');
const api = require('./route/api');

sh.use(logger('dev'));

sh.get('/', (req, res) => {
  res.redirect('/playground');
});

sh.use('/', docs);
sh.use('/api', api);

sh.listen(5000, async () => {
  console.log({
    status: 'Active',
    message: 'Powered by https://github.com/xznsenpai'
  });
});
/*
Author: https://github.com/xznsenpai
*/
