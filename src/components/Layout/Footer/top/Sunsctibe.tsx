// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, TextField, Typography } from "@mui/material";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";

export const Subscribe: React.FC = (): JSX.Element => {
  return (
    <Stack maxWidth={370} sx={{ gap: { xs: "19px", lg: "50px" } }}>
      <Typography variant='h6' fontWeight={500} sx={{ color: "white" }}>
        برای اطلاع از آخرین تخفیف ها و جدید ترین کالاها میتونی ایمیلت رو وارد
        کنی !
      </Typography>

      <TextField
        placeholder='آدرس ایمیل خود را وارد کنید'
        slotProps={{
          input: {
            startAdornment: (
              <MarkEmailUnreadOutlinedIcon
                sx={{ color: "secondary.dark", mr: "5px" }}
              />
            ),
            endAdornment: (
              <Button variant='contained' color='primary'>
                عضویت
              </Button>
            ),
            sx: {
              py: "0px",
              px: "11px",
              bgcolor: "white",
              borderRadius: "10px",
            },
          },
        }}
      />
    </Stack>
  );
};
