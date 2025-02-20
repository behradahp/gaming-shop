// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";

// Components
import { FirstAddButton } from "./FirstAddButton";

// Context
import { useStore } from "../../../../context/store";
import { BasketActionTypes } from "../../../../context/basket/basketReducer";

// Types
import { Product } from "../../../../@types/api.types";
import { ChangeBasketButtons } from "./ChangeBasketButtons";

export const ProductCardLastRow: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  const { store, dispatch } = useStore();

  const findCount = () => {
    let count = 0;

    store.basket.forEach((item) => {
      if (item.product_id === product.id) count = item.count;
    });

    return count;
  };

  const isExist = () => {
    let is = false;

    store.basket.forEach((item) => {
      if (item.product_id === product.id) is = true;
    });

    return is;
  };

  return (
    <Stack
      width='100%'
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Typography fontWeight='600' sx={{ color: "black" }}>
        $ {product.price}
      </Typography>

      {isExist() ? (
        <ChangeBasketButtons
          count={findCount()}
          increaseFC={() =>
            dispatch({ type: BasketActionTypes.Increase, payload: product })
          }
          decreaseFC={() =>
            dispatch({ type: BasketActionTypes.Decrease, payload: product })
          }
        />
      ) : (
        <FirstAddButton
          addFC={() =>
            dispatch({ type: BasketActionTypes.Add, payload: product })
          }
        />
      )}
    </Stack>
  );
};
