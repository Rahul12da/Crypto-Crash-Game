require('dotenv').config();
const mongoose = require('mongoose');
const Transaction = require('./models/Transaction');

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    const tx = new Transaction({
      playerId: 'player123',
      usdAmount: 100,
      cryptoAmount: 0.0023,
      currency: 'ETH',
      transactionType: 'bet',
      transactionHash: 'txhash123abc',
      priceAtTime: 2100.50
    });

    await tx.save();
    console.log('✅ Transaction saved:', tx);
    process.exit();
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });