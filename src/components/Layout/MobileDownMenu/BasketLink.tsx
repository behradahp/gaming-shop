// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Badge, Stack, Typography } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

// Context
import { useStore } from "../../../context/store";

export const BasketLink: React.FC<{ pathname: string }> = ({
  pathname,
}): JSX.Element => {
  const { store } = useStore();

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
      {store.basket.length ? (
        <Badge
          color='primary'
          badgeContent={store.basket.length.toLocaleString("fa")}
        >
          <LocalGroceryStoreOutlinedIcon
            sx={{
              color: pathname === "/cart" ? "primary.main" : "secondary.dark",
            }}
          />
        </Badge>
      ) : (
        <LocalGroceryStoreOutlinedIcon
          sx={{
            color: pathname === "/cart" ? "primary.main" : "secondary.dark",
          }}
        />
      )}

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
