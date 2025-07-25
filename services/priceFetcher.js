const axios = require('axios');
let cache = { BTC: 0, ETH: 0, timestamp: 0 };

const fetchPrices = async () => {
  const now = Date.now();
  if (now - cache.timestamp < 10000) return cache; // 10s cache

  const url = `${process.env.CRYPTO_API}?ids=bitcoin,ethereum&vs_currencies=usd`;
  const res = await axios.get(url);

  cache = {
    BTC: res.data.bitcoin.usd,
    ETH: res.data.ethereum.usd,
    timestamp: now
  };

  return cache;
};

module.exports = fetchPrices;