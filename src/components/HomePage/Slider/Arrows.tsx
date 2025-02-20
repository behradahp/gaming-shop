// React Stuff
import { JSX } from "react";

// Material
import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Images
import rightCurve from "../../../assets/images/home_slider/slider-right-curve.png";
import leftCurve from "../../../assets/images/home_slider/slider-left-curve.png";

export const SliderArrows: React.FC<{ next: () => void; prev: () => void }> = ({
  next,
  prev,
}): JSX.Element => {
  return (
    <>
      <Stack
        position='absolute'
        width='calc(100% - 140px)'
        direction='row'
        justifyContent='space-between'
        zIndex={10000}
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
        }}
      >
        <img src={leftCurve} alt='' width={35} height={100} />
        <img src={rightCurve} alt='' width={35} height={100} />
      </Stack>

      <Stack
        position='absolute'
        left={50}
        width='calc(100% - 100px)'
        direction='row'
        justifyContent='space-between'
        zIndex={10000}
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
        }}
      >
        <IconButton
          sx={{ bgcolor: "white", width: "44px", height: "44px" }}
          onClick={next}
        >
          <ArrowForwardIosIcon sx={{ color: "secondary.dark" }} />
        </IconButton>
        <IconButton
          sx={{ bgcolor: "white", width: "44px", height: "44px" }}
          onClick={prev}
        >
          <ArrowBackIosNewIcon sx={{ color: "secondary.dark" }} />
        </IconButton>
      </Stack>
    </>
  );
};
