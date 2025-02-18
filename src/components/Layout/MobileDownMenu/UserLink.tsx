// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

// Context
import { useStore } from "../../../context/store";

export const UserLink: React.FC<{ pathname: string }> = ({
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
      to={store.user.isAuthenticated ? "/dashboard" : "/login"}
      sx={{ textDecoration: "none" }}
    >
      <PersonOutlinedIcon
        sx={{
          color: store.user.isAuthenticated
            ? "secondary.main"
            : pathname === "/login" || pathname === "/register"
            ? "primary.main"
            : "secondary.dark",
        }}
        fontSize={store.user.isAuthenticated ? "large" : "small"}
      />
      <Typography
        sx={{
          display: store.user.isAuthenticated ? "none" : "block",
          color:
            pathname === "/login" || pathname === "/register"
              ? "primary.main"
              : "secondary.dark",
        }}
      >
        ورود/ثبت نام
      </Typography>
    </Stack>
  );
};
