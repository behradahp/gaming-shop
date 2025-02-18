// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";

// Images
import footerOneImage from "../../../../assets/images/footer1.png";
import footerTwoImage from "../../../../assets/images/footer2.png";
import footerThreeImage from "../../../../assets/images/footer3.png";

// Icons
import whatsAppIcon from "../../../../assets/icons/footer-socials/whatsApp.svg";
import telegramIcon from "../../../../assets/icons/footer-socials/telegram.svg";
import youtubeIcon from "../../../../assets/icons/footer-socials/youtube.svg";
import instagramIcon from "../../../../assets/icons/footer-socials/instagram.svg";
import xIcon from "../../../../assets/icons/footer-socials/whatsApp.svg";

export const TrustAnsSocials: React.FC = (): JSX.Element => {
  return (
    <Stack spacing='18px' sx={{ alignItems: { xs: "center", lg: "start" } }}>
      <Typography variant='h6' fontWeight='600'>
        اعتماد شما سرمایه ماست!
      </Typography>

      <Stack direction='row' spacing='22px' py='15px'>
        <img src={footerOneImage} alt='' width={69} />
        <img src={footerTwoImage} alt='' width={69} />
        <img src={footerThreeImage} alt='' width={69} />
      </Stack>

      <Stack direction='row' spacing='20px'>
        <NavLink to=''>
          <img src={whatsAppIcon} alt='' width={40} />
        </NavLink>
        <NavLink to=''>
          <img src={telegramIcon} alt='' width={40} />
        </NavLink>
        <NavLink to=''>
          <img src={youtubeIcon} alt='' width={40} />
        </NavLink>
        <NavLink to=''>
          <img src={instagramIcon} alt='' width={40} />
        </NavLink>
        <NavLink to=''>
          <img src={xIcon} alt='' width={40} />
        </NavLink>
      </Stack>
    </Stack>
  );
};
