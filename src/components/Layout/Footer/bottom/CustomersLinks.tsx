// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";

export const CustomersLinks: React.FC = (): JSX.Element => {
  return (
    <Stack
      spacing='18px'
      sx={{
        minHeight: {
          xs: 0,
          lg: 214,
        },
        alignItems: {
          xs: "center",
          lg: "start",
        },
      }}
    >
      <Typography variant='h6' fontWeight='600'>
        خدمات مشتریان
      </Typography>
      <Stack
        sx={{
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "18px",
        }}
      >
        <Typography
          variant='body2'
          fontWeight='500'
          sx={{ color: "secondary.dark", textDecoration: "none" }}
          component={NavLink}
          to=''
        >
          پرسش های متداول
        </Typography>
        <Typography
          variant='body2'
          fontWeight='500'
          sx={{ color: "secondary.dark", textDecoration: "none" }}
          component={NavLink}
          to=''
        >
          پیگیری سفارش ها
        </Typography>
        <Typography
          variant='body2'
          fontWeight='500'
          sx={{ color: "secondary.dark", textDecoration: "none" }}
          component={NavLink}
          to=''
        >
          شرایط و قوانین
        </Typography>
        <Typography
          variant='body2'
          fontWeight='500'
          sx={{ color: "secondary.dark", textDecoration: "none" }}
          component={NavLink}
          to=''
        >
          ثبت شکایات و پیشنهادات
        </Typography>
      </Stack>
    </Stack>
  );
};
