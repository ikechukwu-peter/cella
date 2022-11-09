export interface IAuth {
  email: string;
  description: string;
  status: boolean;
}

export interface IUser {
  email: string;
  firstName: string;
  token: string;
}

export type AuthContextType = {
  user: IUser;
  isLoading: boolean;
  onLogin: (user: IAuth) => void;
  onLogout: (id: number) => void;
};
