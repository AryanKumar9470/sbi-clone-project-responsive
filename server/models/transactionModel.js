
const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    transactionType: {
      type: String,
      required: true,
      enum: ['deposit', 'withdrawal', 'transfer'],
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    recipient: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'completed', 'failed'],
      default: 'completed',
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
