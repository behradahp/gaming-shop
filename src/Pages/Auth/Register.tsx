// React Stuff
import { JSX, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { myToast } from "../../config/toast";

// Material
import { Button, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// API
import { UserRegister } from "../../api/auth";

export const RegisterPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "https://picsum.photos/800",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerFunction = async () => {
    setIsLoading(true);
    const success = await UserRegister(data);
    setIsLoading(false);

    if (success) {
      myToast.success("ثبت‌نام موفقیت آمیز بود :)");
      navigate("/login");
    } else {
      myToast.error("مشکلی پیش آمده است!");
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
        اکانتی برای خود بسازید :)
      </Typography>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerFunction();
        }}
        autoComplete='off'
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
            ثبت‌نام
          </Typography>

          <Stack width='100%' spacing={1}>
            <Typography variant='body1' fontWeight={300}>
              نام :
            </Typography>
            <TextField
              color='secondary'
              slotProps={{ input: { sx: { borderRadius: "10px" } } }}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              autoComplete='off'
            />
          </Stack>

          <Stack width='100%' spacing={1}>
            <Typography variant='body1' fontWeight={300}>
              ایمیل :
            </Typography>
            <TextField
              color='secondary'
              slotProps={{ input: { sx: { borderRadius: "10px" } } }}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              autoComplete='off'
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
              autoComplete='new-password'
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
            ثبت‌نام
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
          to='/login'
        >
          ورود
        </Button>
      </Stack>
    </Stack>
  );
};
