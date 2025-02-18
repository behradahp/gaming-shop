// React Stuff
import { JSX, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { myToast } from "../../config/toast";

// Material
import { Button, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// context
import { useStore } from "../../context/store";
import { UserActionTypes } from "../../context/user/userReducer";

// API
import { UserLogin } from "../../api/auth";

export const LoginPage: React.FC = (): JSX.Element => {
  const { dispatch } = useStore();

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginFunction = async () => {
    setIsLoading(true);
    const userData = await UserLogin(data);
    setIsLoading(false);

    if (userData) {
      myToast.success("ورود موفقیت آمیز بود :)");
      dispatch({ type: UserActionTypes.Login, payload: userData });
      navigate("/dashboard");
    } else {
      myToast.error("نام کاربری یا رمز عبور اشتباه است!");
    }
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
        لطفا به اکانت خود وارد شوید
      </Typography>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginFunction();
        }}
      >
        <Stack
          width={500}
          alignItems='center'
          spacing={3}
          bgcolor='white'
          p='20px'
          borderRadius={3}
          boxShadow={3}
        >
          <Typography
            variant='h5'
            textAlign='center'
            py={1}
            sx={{
              borderBottom: "1px solid",
              borderColor: "primary.main",
              width: "40%",
            }}
          >
            ورود
          </Typography>

          <Stack width='100%' spacing={1}>
            <Typography variant='body1' fontWeight={300}>
              ایمیل :
            </Typography>
            <TextField
              color='secondary'
              slotProps={{ input: { sx: { borderRadius: "10px" } } }}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </Stack>

          <Stack width='100%' spacing={1}>
            <Typography variant='body1' fontWeight={300}>
              رمز عبور :
            </Typography>
            <TextField
              type='password'
              color='secondary'
              size='medium'
              slotProps={{ input: { sx: { borderRadius: "10px" } } }}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </Stack>

          <Button
            loading={isLoading}
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            size='large'
            endIcon={<ArrowBackIosNewIcon />}
            sx={{ borderRadius: "10px", py: "12px" }}
            disableElevation
          >
            ورود
          </Button>
        </Stack>
      </form>

      <Stack direction='row' spacing={3}>
        <Button
          variant='contained'
          color='secondary'
          component={NavLink}
          to='/'
        >
          صفحه اصلی
        </Button>
        <Button
          variant='contained'
          color='secondary'
          component={NavLink}
          to='/register'
        >
          ثبت‌نام
        </Button>
      </Stack>
    </Stack>
  );
};
