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

export const ProductCardLastRow: React.FC<{
  product: Product;
  isDiscount?: boolean;
}> = ({ product, isDiscount = false }): JSX.Element => {
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
      <Stack alignItems='start'>
        {isDiscount && (
          <Typography
            variant='body2'
            fontWeight='300'
            sx={{
              fontSize: { xs: "12px", lg: "14px" },
              color: "#666872",
              direction: "ltr",
              textDecoration: "line-through",
            }}
          >
            {product.default_variant.price.rrp_price.toLocaleString("fa")} تومان
          </Typography>
        )}
        <Typography
          fontWeight='600'
          sx={{
            fontSize: { xs: "14px", lg: "18px" },
            color: "black",
            direction: "ltr",
          }}
        >
          {product.default_variant.price.selling_price.toLocaleString("fa")}{" "}
          تومان
        </Typography>
      </Stack>

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
