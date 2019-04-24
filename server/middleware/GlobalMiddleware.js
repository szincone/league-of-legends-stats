const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const matches = require('../routes/Matches');

module.exports = (server) => {
  server.use(
    cors({
      credentials: true,
    }),
  );
  server.use(helmet());
  server.use(express.json());
  server.use(morgan('dev'));
  server.use('/matches', matches);
};
