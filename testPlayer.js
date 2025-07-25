require('dotenv').config();
const mongoose = require('mongoose');
const Player = require('./models/Player');

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    const player = new Player({
      username: 'test_user_1',
      wallet: {
        BTC: 0.05,
        ETH: 1.2
      }
    });

    await player.save();
    console.log('✅ Player saved:', player);
    process.exit();
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });