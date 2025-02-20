// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";

export const ProductCardLabel: React.FC = (): JSX.Element => {
  return (
    <Stack
      bgcolor='#ECFFF2'
      border='1px solid #0D8B0B'
      width='max-content'
      padding='5px 10px'
      borderRadius='5px'
    >
      <Typography variant='body2' fontWeight='300' sx={{ color: "#0D8B0B" }}>
        پرفروش
      </Typography>
    </Stack>
  );
};
