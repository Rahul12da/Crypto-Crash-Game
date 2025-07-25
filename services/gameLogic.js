const generateCrashPoint = require('./crashAlgorithm');
const fetchPrices = require('./priceFetcher');
const Round = require('../models/Round');
const Player = require('../models/Player');
const Transaction = require('../models/Transaction');

let currentRound = null;
let roundNumber = 0;
let activeBets = [];
let crashPoint = 0;
let multiplier = 1.0;

const startRound = async (io) => {
  roundNumber++;
  const seed = Date.now().toString();
  crashPoint = generateCrashPoint(seed, roundNumber);
  multiplier = 1.0;
  currentRound = new Round({ roundId: `R${roundNumber}`, startTime: new Date(), crashMultiplier: crashPoint });

  activeBets = [];
  io.emit('roundStarted', { roundId: currentRound.roundId });

  let timeElapsed = 0;
  const interval = setInterval(async () => {
    timeElapsed += 100;
    multiplier = parseFloat((1 + timeElapsed / 1000 * 0.05).toFixed(2));

    if (multiplier >= crashPoint) {
      clearInterval(interval);
      io.emit('roundCrashed', { crashMultiplier: crashPoint });
      await currentRound.save();
      return;
    }

    io.emit('multiplierUpdate', { multiplier });
  }, 100);
};

module.exports = { startRound };