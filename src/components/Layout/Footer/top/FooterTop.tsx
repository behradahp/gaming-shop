// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, TextField, Typography } from "@mui/material";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";

// Icons
import footerMainIcon from "../../../../assets/icons/footer-main-icon.svg";

export const FooterTop: React.FC = (): JSX.Element => {
  return (
    <Stack
      position='absolute'
      top={0}
      sx={{
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        padding: {
          xs: "20px",
          lg: "50px",
        },
        justifyContent: {
          xs: "start",
          lg: "space-between",
        },
        alignItems: "center",
        gap: {
          xs: "47px",
          lg: "0px",
        },
      }}
      width='85%'
      bgcolor='secondary.main'
      borderRadius='15px'
    >
      <Stack
        spacing='16px'
        maxWidth={600}
        sx={{
          alignItems: {
            xs: "center",
            lg: "start",
          },
        }}
      >
        <img src={footerMainIcon} alt='footer-main-icon' width={113} />
        <Typography variant='body2' sx={{ color: "white" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم
        </Typography>
      </Stack>

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
    </Stack>
  );
};
