const crypto = require('crypto');

/**
 * Converts USD to the selected cryptocurrency based on price.
 * @param {number} usdAmount - The amount in USD.
 * @param {number} cryptoPrice - The current price of the cryptocurrency in USD.
 * @returns {number} - The equivalent amount in cryptocurrency.
 */
function convertUsdToCrypto(usdAmount, cryptoPrice) {
  if (usdAmount <= 0 || cryptoPrice <= 0) return 0;
  return parseFloat((usdAmount / cryptoPrice).toFixed(8)); // e.g., 0.00012345 BTC
}

/**
 * Converts cryptocurrency to USD based on price.
 * @param {number} cryptoAmount - Amount in crypto.
 * @param {number} cryptoPrice - Price of the crypto in USD.
 * @returns {number} - USD equivalent.
 */
function convertCryptoToUsd(cryptoAmount, cryptoPrice) {
  if (cryptoAmount <= 0 || cryptoPrice <= 0) return 0;
  return parseFloat((cryptoAmount * cryptoPrice).toFixed(2)); // USD rounded to 2 decimal
}

/**
 * Generates a mock transaction hash (simulate blockchain tx hash).
 * @returns {string} - A random 64-character hex string.
 */
function generateTransactionHash() {
  return crypto.randomBytes(32).toString('hex'); // Simulates a 64-character tx hash
}

/**
 * Validates supported cryptocurrencies.
 * @param {string} currency - 'BTC', 'ETH', etc.
 * @returns {boolean} - Whether the currency is supported.
 */
function isValidCurrency(currency) {
  return ['BTC', 'ETH'].includes(currency);
}

/**
 * Returns a timestamp in ISO format for consistency.
 * @returns {string}
 */
function getCurrentTimestamp() {
  return new Date().toISOString();
}

module.exports = {
  convertUsdToCrypto,
  convertCryptoToUsd,
  generateTransactionHash,
  isValidCurrency,
  getCurrentTimestamp
};