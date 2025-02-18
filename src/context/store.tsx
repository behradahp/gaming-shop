import { createContext, useContext } from "react";
import { Store } from "./types.store";

interface StoreType {
  store: Store;
  dispatch: React.ActionDispatch<[action: unknown]>;
}

const initialState: Store = {
  user: {
    userInfo: null,
    token: null,
    isAuthenticated: false,
  },
};

export const StoreContext = createContext<StoreType>({
  store: initialState,
  dispatch: () => {},
});

export const useStore = () => useContext(StoreContext);
