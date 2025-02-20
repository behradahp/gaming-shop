import { JSX, useReducer } from "react";
import { StoreContext } from "./store";
import { userReducer } from "./user/userReducer";
import {
  BasketActions,
  MobileViewActions,
  Store,
  UserActions,
} from "./types.store";
import { basketReducer } from "./basket/basketReducer";
import { mobileViewReducer } from "./mobileView/mobileViewReducer";

const initialState: Store = {
  user: {
    userInfo: null,
    token: null,
    isAuthenticated: false,
  },
  basket: localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket")!)
    : [],
  mobileView: { is: false },
};

const combinedReducer = (store: Store, action: unknown) => ({
  user: userReducer(store.user, action as UserActions),
  basket: basketReducer(store.basket, action as BasketActions),
  mobileView: mobileViewReducer(store.mobileView, action as MobileViewActions),
});

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const [store, dispatch] = useReducer(combinedReducer, initialState);
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
