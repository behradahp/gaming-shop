// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

// Components
import { DiscountProductSlider } from "./Slider/Slider";
import { DiscountBanner } from "./DiscountBanner";

// Images
import bgImage from "../../../assets/images/discountBg.png";

export const DiscountProducts: React.FC = (): JSX.Element => {
  return (
    <Stack
      sx={{
        pr: {
          xs: "30px",
          lg: "0px",
        },
        mt: {
          xs: "80px",
          lg: "100px",
        },
      }}
    >
      <Stack
        width='100%'
        direction='row'
        borderRadius='15px'
        sx={{
          backgroundImage: `url("${bgImage}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "1300px auto",
          p: {
            xs: "30px 10px",
            lg: "70px",
          },
          gap: { xs: "30px", lg: "120px" },
        }}
      >
        <DiscountBanner />

        <DiscountProductSlider />
      </Stack>
    </Stack>
  );
};
