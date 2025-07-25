const express = require('express');
const router = express.Router();
const fetchPrices = require('../services/priceFetcher');
const Player = require('../models/Player');
const Transaction = require('../models/Transaction');

// Place bet (dummy, update with game state)
router.post('/bet', async (req, res) => {
  const { playerId, usdAmount, currency } = req.body;
  const prices = await fetchPrices();
  const cryptoPrice = prices[currency];

  const cryptoAmount = usdAmount / cryptoPrice;
  // TODO: Deduct from wallet and log bet
  res.json({ cryptoAmount });
});

router.get('/wallet/:playerId', async (req, res) => {
  const player = await Player.findById(req.params.playerId);
  const prices = await fetchPrices();
  res.json({
    wallet: player.wallet,
    usd: {
      BTC: player.wallet.BTC * prices.BTC,
      ETH: player.wallet.ETH * prices.ETH
    }
  });
});

module.exports = router;