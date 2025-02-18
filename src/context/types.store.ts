export type UserInfo = {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
};

export type Token = {
  access: string;
  refresh: string;
};

export type User = {
  userInfo: UserInfo | null;
  token: Token | null;
  isAuthenticated: boolean;
};

export type UserActions = {
  type: string;
  payload: UserInfo & Token;
};

export type Store = {
  user: User;
};
