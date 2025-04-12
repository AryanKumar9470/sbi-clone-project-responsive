
const express = require('express');
const { 
  createTransaction,
  getUserTransactions,
  getTransactionById 
} = require('../controllers/transactionController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createTransaction);
router.get('/', protect, getUserTransactions);
router.get('/:id', protect, getTransactionById);

module.exports = router;
