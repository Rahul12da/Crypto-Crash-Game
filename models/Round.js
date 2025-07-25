const mongoose = require('mongoose');

const RoundSchema = new mongoose.Schema({
  roundId: String,
  startTime: Date,
  crashMultiplier: Number,
  bets: [{
    playerId: String,
    usdAmount: Number,
    cryptoAmount: Number,
    currency: String,
    cashoutMultiplier: Number,
    outcome: String
  }]
});

module.exports = mongoose.model('Round', RoundSchema);