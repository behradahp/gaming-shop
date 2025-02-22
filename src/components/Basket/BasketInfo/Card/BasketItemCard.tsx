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

export const BasketItemCard: React.FC<{
  item: Basket;
  dispatch: React.ActionDispatch<[action: unknown]>;
}> = ({ item, dispatch }): JSX.Element => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      gap='0'
      width='100%'
      bgcolor='white'
      p='20px'
      sx={{ boxShadow: "0 10px 30px 0px rgba(0, 0, 0, 0.1)" }}
      borderRadius='15px'
    >
      <Stack direction='row' spacing='26px' maxWidth='75%'>
        <img
          src={item.product.images.main.url[0]}
          alt='product-image'
          width={173}
          height={173}
          style={{ borderRadius: "8px" }}
        />

        <Stack justifyContent='space-between'>
          <BasketItemtitleAndDescription
            title={item.product.title_fa}
            description={""}
          />

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
        </Stack>
      </Stack>
      <Stack justifyContent='end' alignItems='end'>
        {item.product.default_variant.price.rrp_price !==
          item.product.default_variant.price.selling_price && (
          <Typography
            variant='body1'
            fontWeight='200'
            sx={{ color: "#AFB1BA", textDecoration: "line-through" }}
          >
            {item.product.default_variant.price.rrp_price.toLocaleString("fa")}{" "}
            تومان
          </Typography>
        )}
        <Typography variant='h5'>
          {item.product.default_variant.price.selling_price.toLocaleString(
            "fa"
          )}{" "}
          تومان
        </Typography>
      </Stack>
    </Stack>
  );
};
