import { JSX, useReducer } from "react";
import { StoreContext } from "./store";
import { userReducer } from "./user/userReducer";
import { Store, UserActions } from "./types.store";

const initialState: Store = {
  user: {
    userInfo: null,
    token: null,
    isAuthenticated: false,
  },
};

const combinedReducer = (store: Store, action: unknown) => ({
  user: userReducer(store.user, action as UserActions),
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
