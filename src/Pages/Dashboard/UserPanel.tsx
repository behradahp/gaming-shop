// React Stuff
import { JSX } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Material
import { Button, Stack, Typography } from "@mui/material";

// Context
import { useStore } from "../../context/store";
import { UserActionTypes } from "../../context/user/userReducer";

export const UserPanelPage: React.FC = (): JSX.Element => {
  const { store, dispatch } = useStore();

  const navigate = useNavigate();

  const logoutFunction = () => {
    navigate("/");
    setTimeout(() => {
      dispatch({ type: UserActionTypes.Logout });
    }, 500);
  };

  return (
    <Stack
      width='100%'
      height='100vh'
      alignItems='center'
      justifyContent='center'
      spacing={3}
    >
      <Typography variant='h4' fontWeight={600}>
        اینجا پنل کاربری شما است
      </Typography>

      <Typography variant='h5' fontWeight={300}>
        سلام بر تو ای{" "}
        {store.user.userInfo ? store.user.userInfo.name : "ثبت نام نشده!!!"}{" "}
        بزرگ
      </Typography>

      <Stack direction='row' spacing={3}>
        <Button variant='contained' color='error' onClick={logoutFunction}>
          خروج
        </Button>

        <Button
          variant='contained'
          color='secondary'
          component={NavLink}
          to='/'
        >
          صفحه اصلی
        </Button>
      </Stack>
    </Stack>
  );
};
