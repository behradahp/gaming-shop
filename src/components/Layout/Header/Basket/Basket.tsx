// React Stuff
import { JSX } from "react";

// Component
import { EmptyBasket } from "./Empty/EmptyBasket";
import { FullBasket } from "./Full/FullBasket";

// Context
import { useStore } from "../../../../context/store";

export const Basket: React.FC = (): JSX.Element => {
  const { store } = useStore();

  if (store.basket.length) {
    return <FullBasket />;
  }

  return <EmptyBasket />;
};
