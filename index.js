require('dotenv').config();
const express = require('express');
const configureMiddleware = require('./server/middleware/GlobalMiddleware');

const server = express();
const PORT = process.env.PORT || 9000;

configureMiddleware(server);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
