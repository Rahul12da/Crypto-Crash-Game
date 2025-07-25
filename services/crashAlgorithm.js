const crypto = require('crypto');

function generateCrashPoint(seed, roundNumber) {
  const hash = crypto.createHash('sha256').update(`${seed}-${roundNumber}`).digest('hex');
  const maxCrash = 100;
  const num = parseInt(hash.slice(0, 8), 16); // take first 8 hex chars
  return Math.max(1.0, (num % (maxCrash * 100)) / 100.0); // e.g., 1.00 to 100.00
}

module.exports = generateCrashPoint;