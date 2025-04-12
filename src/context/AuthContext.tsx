
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AuthService, { UserData } from '../services/auth.service';
import { useToast } from "@/components/ui/use-toast";

interface AuthContextType {
  user: UserData | null;
  loading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string, firstName: string, lastName: string, email: string) => Promise<void>;
  logout: () => void;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const userData = await AuthService.login({ username, password });
      setUser(userData);
      toast({
        title: "Login successful",
        description: `Welcome back, ${userData.firstName}!`,
      });
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'An error occurred during login';
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Login failed",
        description: errorMessage,
      });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (username: string, password: string, firstName: string, lastName: string, email: string) => {
    try {
      setLoading(true);
      setError(null);
      const userData = await AuthService.register({ username, password, firstName, lastName, email });
      setUser(userData);
      toast({
        title: "Registration successful",
        description: `Welcome to Wealth Wave, ${userData.firstName}!`,
      });
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'An error occurred during registration';
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: errorMessage,
      });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
    toast({
      title: "Logout successful",
      description: "You have been logged out successfully.",
    });
  };

  const refreshUserData = async () => {
    try {
      if (AuthService.isLoggedIn()) {
        const userData = await AuthService.getUserProfile();
        setUser({
          ...user,
          ...userData
        } as UserData);
      }
    } catch (err) {
      console.error('Error refreshing user data:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout, refreshUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
