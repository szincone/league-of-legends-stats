const express = require('express');
const router = express.Router();
const axios = require('axios');

const responseStatus = {
  success: 200,
  badRequest: 400,
  notFound: 404,
  notAcceptable: 406,
  internalErr: 500,
};
const baseURL = 'https://na1.api.riotgames.com/lol/';

router.get('/:summoner_name', async (req, res) => {
  try {
    const summonerName = req.params.summoner_name;
    const summonerInfo = await axios.get(
      `${baseURL}summoner/v4/summoners/by-name/${summonerName}?api_key=${
        process.env.API_KEY
      }`,
    );
    const matches = await axios.get(
      `${baseURL}match/v4/matchlists/by-account/${
        summonerInfo.data.accountId
      }?api_key=${process.env.API_KEY}`,
    );
    // console.log('MAMAMAMAM', matches.data.matches);
    res.status(responseStatus.success).json(matches.data.matches);
  } catch (err) {
    res.status(responseStatus.internalErr).json(err);
  }
});
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
