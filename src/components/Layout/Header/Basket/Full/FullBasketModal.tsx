// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

// Components
import { BasketItemCard } from "./BasketItemCard";

// Image
import { Basket } from "../../../../../context/types.store";
import { BasketActionTypes } from "../../../../../context/basket/basketReducer";

export const FullBasketModal: React.FC<{
  basket: Basket[];
  dispatch: React.ActionDispatch<[action: unknown]>;
}> = ({ basket, dispatch }): JSX.Element => {
  const totalPrice = () => {
    const total = basket.reduce(
      (acc, curr) =>
        acc + curr.product.default_variant.price.selling_price * curr.count,
      0
    );

    return total;
  };

  return (
    <Stack
      position='absolute'
      right={0}
      top='120%'
      zIndex={100000}
      bgcolor='white'
      sx={{ boxShadow: "0 10px 30px 0px rgba(0, 0, 0, 0.1)" }}
      borderRadius='15px'
    >
      <Stack
        direction='row'
        alignItems='center'
        gap='322px'
        p='20px'
        borderBottom='1px solid #EAEBF0'
      >
        <Typography
          fontWeight='300'
          sx={{ color: "black", minWidth: "max-content" }}
        >
          سبد خرید
        </Typography>
        <Typography
          variant='body2'
          fontWeight='300'
          sx={{ color: "black", minWidth: "max-content" }}
        >
          تعداد کالا: {basket.length.toLocaleString("fa")}
        </Typography>
      </Stack>

      <Stack py='18px' px='20px' maxHeight='354px' sx={{ overflowY: "auto" }}>
        {basket.map((item) => {
          return (
            <BasketItemCard
              item={item}
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
          );
        })}
      </Stack>

      <Stack p='20px'>
        <Button
          variant='contained'
          sx={{ justifyContent: "space-between", px: "50px" }}
          component={NavLink}
          to='/cart'
        >
          <Typography>هزینه قابل پرداخت: </Typography>
          <Typography>{totalPrice().toLocaleString("fa")} تومان</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
