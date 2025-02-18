// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";

// Icons
import footerMainIcon from "../../../../assets/icons/footer-main-icon.svg";

export const ShopPresent: React.FC = (): JSX.Element => {
  return (
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
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم
      </Typography>
    </Stack>
  );
};
