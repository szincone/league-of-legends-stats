const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const matches = require('../routes/Matches');

module.exports = (server) => {
  server.use(helmet());
  server.use(express.json());
  server.use(morgan('dev'));
  server.use('/matches', matches);
};
