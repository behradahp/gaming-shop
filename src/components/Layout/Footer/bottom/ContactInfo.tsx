// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";

export const ContactInfo: React.FC = (): JSX.Element => {
  return (
    <Stack
      spacing='18px'
      maxWidth={246}
      minHeight={214}
      sx={{ alignItems: { xs: "center", lg: "start" } }}
    >
      <Typography variant='h6' fontWeight='600'>
        راه های ارتباطی
      </Typography>
      <Typography
        variant='body2'
        fontWeight='500'
        sx={{ color: "secondary.dark", textDecoration: "none" }}
      >
        تلفن: ۰۹۰۱۵۸۲۰۵۷۱
      </Typography>
      <Typography
        variant='body2'
        fontWeight='500'
        sx={{ color: "secondary.dark", textDecoration: "none" }}
      >
        ایمیل: beh.afsharipo@gmail.com
      </Typography>
      <Typography
        variant='body2'
        fontWeight='500'
        textAlign='center'
        sx={{
          color: "secondary.dark",
          textDecoration: "none",
          textAlign: {
            xs: "center",
            lg: "start",
          },
        }}
      >
        آدرس: تهران، شهرک غرب، انتهای بلوار پاکنژاد، خیابان صبحی
      </Typography>
    </Stack>
  );
};
