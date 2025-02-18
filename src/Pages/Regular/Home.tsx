// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";

export const HomePage: React.FC = (): JSX.Element => {
  return (
    <Stack
      width='100%'
      height='100vh'
      alignItems='center'
      justifyContent='center'
      spacing={3}
    >
      <Typography variant='h4' fontWeight={600}>
        اینجا صفحه اصلی است
      </Typography>

      <Stack direction='row' spacing={3}></Stack>
    </Stack>
  );
};
