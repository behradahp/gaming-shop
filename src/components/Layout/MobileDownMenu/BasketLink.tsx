// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

export const BasketLink: React.FC<{ pathname: string }> = ({
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
      to='/cart'
      sx={{ textDecoration: "none" }}
    >
      <LocalGroceryStoreOutlinedIcon
        sx={{
          color: pathname === "/cart" ? "primary.main" : "secondary.dark",
        }}
      />
      <Typography
        sx={{
          color: pathname === "/cart" ? "primary.main" : "secondary.dark",
        }}
      >
        سبد خرید
      </Typography>
    </Stack>
  );
};
