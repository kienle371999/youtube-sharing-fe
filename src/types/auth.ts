import { ReactElement } from 'react';

// ==============================|| AUTH TYPES ||============================== //

export type GuardProps = {
  children: ReactElement | null;
};

export type UserProfile = {
  id: number;
  username: string;
  email: string;
};

export interface AuthProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  token?: string | null;
}

export interface AuthActionProps {
  type: string;
}

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: VoidFunction;
};
