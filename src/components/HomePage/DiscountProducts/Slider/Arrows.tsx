// React Stuff
import { JSX } from "react";

// Material
import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const SliderArrows: React.FC<{ next: () => void; prev: () => void }> = ({
  next,
  prev,
}): JSX.Element => {
  return (
    <Stack
      position='absolute'
      left='-22px'
      width='calc(100% + 44px)'
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
  );
};
