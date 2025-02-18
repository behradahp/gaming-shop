// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";

export const HomeLink: React.FC<{ pathname: string }> = ({
  pathname,
}): JSX.Element => {
  return (
    <Stack
      width={130}
      height='100%'
      spacing='6px'
      justifyContent='center'
      alignItems='center'
      component={NavLink}
      to='/'
      sx={{ textDecoration: "none" }}
    >
      <OtherHousesOutlinedIcon
        sx={{
          color: pathname === "/" ? "primary.main" : "secondary.dark",
        }}
      />
      <Typography
        sx={{
          color: pathname === "/" ? "primary.main" : "secondary.dark",
        }}
      >
        خانه
      </Typography>
    </Stack>
  );
};
