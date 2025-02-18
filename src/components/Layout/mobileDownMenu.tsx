// React Stuff
import { JSX } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

// Context
import { useStore } from "../../context/store";

export const MobileDownMenu: React.FC = (): JSX.Element => {
  const { store } = useStore();

  const location = useLocation();
  return (
    <Stack
      position='fixed'
      bottom={0}
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      width='100%'
      height='84px'
      bgcolor='white'
    >
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
            color:
              location.pathname === "/" ? "primary.main" : "secondary.dark",
          }}
        />
        <Typography
          sx={{
            color:
              location.pathname === "/" ? "primary.main" : "secondary.dark",
          }}
        >
          خانه
        </Typography>
      </Stack>

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
            color:
              location.pathname === "/cart" ? "primary.main" : "secondary.dark",
          }}
        />
        <Typography
          sx={{
            color:
              location.pathname === "/cart" ? "primary.main" : "secondary.dark",
          }}
        >
          سبد خرید
        </Typography>
      </Stack>

      <Stack
        width={130}
        height='100%'
        spacing='6px'
        justifyContent='center'
        alignItems='center'
        component={NavLink}
        to={store.user.isAuthenticated ? "/dashboard" : "/login"}
        sx={{ textDecoration: "none" }}
      >
        <PersonOutlinedIcon
          sx={{
            color: store.user.isAuthenticated
              ? "secondary.main"
              : location.pathname === "/login" ||
                location.pathname === "/register"
              ? "primary.main"
              : "secondary.dark",
          }}
          fontSize={store.user.isAuthenticated ? "large" : "small"}
        />
        <Typography
          sx={{
            display: store.user.isAuthenticated ? "none" : "block",
            color:
              location.pathname === "/login" ||
              location.pathname === "/register"
                ? "primary.main"
                : "secondary.dark",
          }}
        >
          ورود/ثبت نام
        </Typography>
      </Stack>
    </Stack>
  );
};
