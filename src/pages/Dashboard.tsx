
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TransactionService, { Transaction } from '../services/transaction.service';
import { useToast } from '@/components/ui/use-toast';
import { CircleDollarSign, ArrowUpRight, ArrowDownLeft, RefreshCw } from 'lucide-react';

const Dashboard = () => {
  const { user, logout, refreshUserData } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const data = await TransactionService.getUserTransactions();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load transaction history",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const refreshData = async () => {
    await refreshUserData();
    await fetchTransactions();
    toast({
      title: "Data Refreshed",
      description: "Your account information has been updated",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getTransactionIcon = (type: string) => {
    if (type === 'deposit') {
      return <ArrowDownLeft className="text-green-500" />;
    } else if (type === 'withdrawal') {
      return <ArrowUpRight className="text-red-500" />;
    } else {
      return <CircleDollarSign className="text-blue-500" />;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 py-8">
        <div className="container">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Welcome, {user?.firstName}</h1>
            <Button onClick={refreshData} variant="outline" size="sm">
              <RefreshCw size={16} className="mr-2" /> Refresh Data
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Account Summary Card */}
            <Card>
              <CardHeader className="bg-gray-50">
                <CardTitle>Account Summary</CardTitle>
                <CardDescription>Your current financial overview</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="font-mono text-lg">{user?.accountNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Available Balance</p>
                    <p className="text-3xl font-bold">${user?.accountBalance?.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex justify-between w-full text-sm">
                  <span>Last Updated:</span>
                  <span>{new Date().toLocaleString()}</span>
                </div>
              </CardFooter>
            </Card>

            {/* Transaction History */}
            <Card className="md:col-span-2">
              <CardHeader className="bg-gray-50">
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest account activities</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {isLoading ? (
                  <p className="text-center py-4">Loading transactions...</p>
                ) : transactions.length === 0 ? (
                  <p className="text-center py-4 text-gray-500">No transactions found</p>
                ) : (
                  <div className="space-y-3">
                    {transactions.slice(0, 5).map((transaction) => (
                      <div key={transaction._id} className="flex items-center p-3 border rounded-md">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          {getTransactionIcon(transaction.transactionType)}
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium capitalize">{transaction.transactionType}</p>
                          <p className="text-xs text-gray-500">{formatDate(transaction.createdAt)}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${transaction.transactionType === 'deposit' ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.transactionType === 'deposit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                          </p>
                          <p className="text-xs text-gray-500">{transaction.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="link" onClick={() => navigate('/accounts')} className="ml-auto">
                  View all transactions
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Button onClick={() => navigate('/accounts')} className="bg-gray-800 hover:bg-yellow-600">
              Account Statement
            </Button>
            <Button onClick={() => navigate('/investment')} className="bg-gray-800 hover:bg-yellow-600">
              Investment Options
            </Button>
            <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700">
              Logout
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
