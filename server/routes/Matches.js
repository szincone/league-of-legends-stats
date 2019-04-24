const express = require('express');
const router = express.Router();

const responseStatus = {
  success: 200,
  badRequest: 400,
  notFound: 404,
  notAcceptable: 406,
  internalErr: 500,
};

router.get('/', async (req, res) => {
  try {
    res
      .status(responseStatus.success)
      .json({ id: 0, message: 'Up and running...' });
  } catch (err) {
    res.status(responseStatus.internalErr).json(err);
  }
});

module.exports = router;
