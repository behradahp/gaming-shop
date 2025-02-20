// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

// Image
import emptyBasketIcon from "../../../../../assets/icons/empty-basket.svg";

export const EmptyBasketModal: React.FC = (): JSX.Element => {
  return (
    <Stack
      position='absolute'
      right={0}
      top='120%'
      zIndex={100}
      bgcolor='white'
      sx={{ boxShadow: "0 10px 30px 0px rgba(0, 0, 0, 0.1)" }}
      borderRadius='15px'
    >
      <Stack
        direction='row'
        gap='322px'
        p='20px'
        borderBottom='1px solid #EAEBF0'
      >
        <Typography fontWeight='300' sx={{ minWidth: "max-content" }}>
          سبد خرید
        </Typography>
        <Typography
          fontWeight='300'
          color='info'
          sx={{ textDecoration: "none", minWidth: "max-content" }}
          component={NavLink}
          to='/cart'
        >
          مشاهده سبد خرید
        </Typography>
      </Stack>

      <Stack alignItems='center' pt='18px' pb='30px'>
        <img
          src={emptyBasketIcon}
          alt='empty-basket'
          width={142}
          height={188}
        />
      </Stack>
    </Stack>
  );
};
