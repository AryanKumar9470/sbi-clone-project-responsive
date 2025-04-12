
import api from './api';

// Types
export interface Transaction {
  _id: string;
  user: string;
  transactionType: 'deposit' | 'withdrawal' | 'transfer';
  amount: number;
  description?: string;
  recipient?: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
}

export interface CreateTransactionData {
  transactionType: 'deposit' | 'withdrawal' | 'transfer';
  amount: number;
  description?: string;
  recipient?: string;
}

const TransactionService = {
  async createTransaction(data: CreateTransactionData): Promise<Transaction> {
    const response = await api.post('/transactions', data);
    return response.data;
  },

  async getUserTransactions(): Promise<Transaction[]> {
    const response = await api.get('/transactions');
    return response.data;
  },

  async getTransactionById(id: string): Promise<Transaction> {
    const response = await api.get(`/transactions/${id}`);
    return response.data;
  }
};

export default TransactionService;
