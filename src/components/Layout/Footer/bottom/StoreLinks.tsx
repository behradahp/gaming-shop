// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";

export const StoreLinks: React.FC = (): JSX.Element => {
  return (
    <Stack
      spacing='18px'
      sx={{
        minHeight: {
          xs: 0,
          lg: 214,
        },
        alignItems: {
          xs: "center",
          lg: "start",
        },
      }}
    >
      <Typography variant='h6' fontWeight='600'>
        فروشگاه
      </Typography>
      <Stack
        sx={{
          flexDirection: {
            xs: "row-reverse",
            lg: "column",
          },
          gap: "18px",
        }}
      >
        <Typography
          variant='body2'
          fontWeight='500'
          sx={{ color: "secondary.dark", textDecoration: "none" }}
          component={NavLink}
          to=''
        >
          درباره ما
        </Typography>
        <Typography
          variant='body2'
          fontWeight='500'
          sx={{ color: "secondary.dark", textDecoration: "none" }}
          component={NavLink}
          to=''
        >
          تماس با ما
        </Typography>
        <Typography
          variant='body2'
          fontWeight='500'
          sx={{ color: "secondary.dark", textDecoration: "none" }}
          component={NavLink}
          to=''
        >
          مجله باز
        </Typography>
        <Typography
          variant='body2'
          fontWeight='500'
          sx={{ color: "secondary.dark", textDecoration: "none" }}
          component={NavLink}
          to=''
        >
          گارانتی کنسول ها
        </Typography>
      </Stack>
    </Stack>
  );
};
