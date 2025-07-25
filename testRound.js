require('dotenv').config();
const mongoose = require('mongoose');
const Round = require('./models/Round');

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    const round = new Round({
      roundId: 'round001',
      crashMultiplier: 3.72,
      bets: [
        {
          playerId: 'player123',
          usdAmount: 50,
          cryptoAmount: 0.001,
          currency: 'BTC',
          cashoutMultiplier: 2.5,
          outcome: 'won'
        }
      ]
    });

    await round.save();
    console.log('✅ Round saved:', round);
    process.exit();
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });