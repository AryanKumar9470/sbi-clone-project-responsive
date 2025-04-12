
import api from './api';

// Types
export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserData {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: string;
  accountBalance: number;
  token: string;
}

const AuthService = {
  async login(credentials: LoginCredentials): Promise<UserData> {
    const response = await api.post('/users/login', credentials);
    if (response.data.token) {
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('userData', JSON.stringify(response.data));
    }
    return response.data;
  },

  async register(data: RegisterData): Promise<UserData> {
    const response = await api.post('/users/register', data);
    if (response.data.token) {
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('userData', JSON.stringify(response.data));
    }
    return response.data;
  },

  logout(): void {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
  },

  getCurrentUser(): UserData | null {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  },

  async getUserProfile(): Promise<UserData> {
    const response = await api.get('/users/profile');
    return response.data;
  },

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }
};

export default AuthService;
