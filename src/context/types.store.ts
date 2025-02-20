import { Product } from "../@types/api.types";

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

export type Basket = {
  product_id: number;
  product: Product;
  count: number;
};

export type BasketActions = {
  type: string;
  payload?: Product;
};

export type MobileView = {
  is: boolean;
};

export type MobileViewActions = {
  type: string;
};

export type Store = {
  user: User;
  basket: Basket[];
  mobileView: MobileView;
};
