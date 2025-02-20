// React Stuff
import { JSX } from "react";

// Types
import { Basket } from "../../../../context/types.store";

// Material
import { Stack, Typography } from "@mui/material";

// Components
import { BasketItemtitleAndDescription } from "./ProductTitleAndDescription";
import { BasketItemButtons } from "./BasketItemButtons";
import { BasketActionTypes } from "../../../../context/basket/basketReducer";

export const BasketItemMobileCard: React.FC<{
  item: Basket;
  dispatch: React.ActionDispatch<[action: unknown]>;
}> = ({ item, dispatch }): JSX.Element => {
  return (
    <Stack
      spacing='13px'
      width='100%'
      bgcolor='white'
      p='15px'
      sx={{ boxShadow: "0 10px 30px 0px rgba(0, 0, 0, 0.1)" }}
      borderRadius='15px'
    >
      <Stack direction='row' spacing='12px'>
        <img
          src={item.product.images[0]}
          alt='product-image'
          width={89}
          height={89}
          style={{ borderRadius: "8px" }}
        />
        <BasketItemtitleAndDescription
          title={item.product.title}
          description={item.product.description}
        />
      </Stack>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <BasketItemButtons
          count={item.count}
          deleteFC={() =>
            dispatch({
              type: BasketActionTypes.Delete,
              payload: item.product,
            })
          }
          increaseFC={() =>
            dispatch({
              type: BasketActionTypes.Increase,
              payload: item.product,
            })
          }
          decreaseFC={() =>
            dispatch({
              type: BasketActionTypes.Decrease,
              payload: item.product,
            })
          }
        />
        <Typography variant='h5'>{item.product.price}$</Typography>
      </Stack>
    </Stack>
  );
};
