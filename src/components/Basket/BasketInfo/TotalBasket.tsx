// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, Typography } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

import { useStore } from "../../../context/store";

export const TotalBasket: React.FC = (): JSX.Element => {
  const { store } = useStore();

  const totalPrice = () => {
    const total = store.basket.reduce(
      (acc, curr) =>
        acc + curr.product.default_variant.price.rrp_price * curr.count,
      0
    );

    return total;
  };

  const totalDiscount = () => {
    const total = store.basket.reduce(
      (acc, curr) =>
        acc +
        (curr.product.default_variant.price.rrp_price -
          curr.product.default_variant.price.selling_price) *
          curr.count,
      0
    );

    return total;
  };

  const totalPayablePrice = () => {
    const total = store.basket.reduce(
      (acc, curr) =>
        acc + curr.product.default_variant.price.selling_price * curr.count,
      0
    );

    return total;
  };

  return (
    <Stack
      flexShrink={0}
      position={"sticky"}
      top={10}
      height='max-content'
      spacing='20px'
      bgcolor='white'
      p='15px'
      borderRadius='15px'
      sx={{
        width: {
          xs: "100%",
          lg: "370px",
        },
        boxShadow: "0 10px 30px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        spacing='10px'
        width='100%'
        py='10.5px'
        px='5px'
        bgcolor='info.light'
      >
        <LocalGroceryStoreOutlinedIcon fontSize='small' color='info' />
        <Typography fontWeight='300'>جزییات خرید</Typography>
      </Stack>

      <Stack>
        <Stack spacing='22px' pb='15px' borderBottom='1px solid #EAEBF0'>
          <Stack direction='row' width='100%' justifyContent='space-between'>
            <Typography fontWeight='300'>قیمت محصولات:</Typography>
            <Typography fontWeight='300'>
              {totalPrice().toLocaleString("fa")} تومان
            </Typography>
          </Stack>

          <Stack direction='row' width='100%' justifyContent='space-between'>
            <Typography fontWeight='300' color='error'>
              تخفیف محصولات:
            </Typography>
            <Typography fontWeight='300' color='error'>
              {totalDiscount().toLocaleString("fa")} تومان
            </Typography>
          </Stack>
        </Stack>
        <Stack py='15px'>
          <Stack direction='row' width='100%' justifyContent='space-between'>
            <Typography variant='h6' fontWeight='300'>
              هزینه قابل پرداخت:
            </Typography>
            <Typography variant='h6' fontWeight='600'>
              {totalPayablePrice().toLocaleString("fa")} تومان
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Button
        variant='contained'
        disableElevation
        size='large'
        sx={{ borderRadius: "10px" }}
      >
        ثبت سفارش
      </Button>
    </Stack>
  );
};
