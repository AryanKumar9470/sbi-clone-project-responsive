
const Transaction = require('../models/transactionModel');
const User = require('../models/userModel');

// @desc    Create new transaction
// @route   POST /api/transactions
// @access  Private
const createTransaction = async (req, res) => {
  const { transactionType, amount, description, recipient } = req.body;

  try {
    const user = await User.findById(req.user._id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Handle different transaction types
    switch (transactionType) {
      case 'deposit':
        user.accountBalance += parseFloat(amount);
        break;
        
      case 'withdrawal':
        if (user.accountBalance < parseFloat(amount)) {
          return res.status(400).json({ message: 'Insufficient funds' });
        }
        user.accountBalance -= parseFloat(amount);
        break;
        
      case 'transfer':
        if (!recipient) {
          return res.status(400).json({ message: 'Recipient is required for transfers' });
        }
        
        if (user.accountBalance < parseFloat(amount)) {
          return res.status(400).json({ message: 'Insufficient funds' });
        }
        
        const recipientUser = await User.findOne({ accountNumber: recipient });
        if (!recipientUser) {
          return res.status(404).json({ message: 'Recipient not found' });
        }
        
        user.accountBalance -= parseFloat(amount);
        recipientUser.accountBalance += parseFloat(amount);
        await recipientUser.save();
        break;
        
      default:
        return res.status(400).json({ message: 'Invalid transaction type' });
    }

    const transaction = new Transaction({
      user: req.user._id,
      transactionType,
      amount: parseFloat(amount),
      description,
      recipient,
      status: 'completed'
    });

    await transaction.save();
    user.transactions.push(transaction._id);
    await user.save();

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get user transactions
// @route   GET /api/transactions
// @access  Private
const getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get transaction by ID
// @route   GET /api/transactions/:id
// @access  Private
const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (transaction && transaction.user.toString() === req.user._id.toString()) {
      res.json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { 
  createTransaction, 
  getUserTransactions, 
  getTransactionById 
};
