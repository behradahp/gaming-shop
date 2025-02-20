// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";

export const BasketItemtitleAndDescription: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }): JSX.Element => {
  return (
    <Stack spacing={1}>
      <Typography variant='h6' fontWeight={500} sx={{ color: "black" }}>
        {title}
      </Typography>

      <Typography variant='body2' fontWeight={200} sx={{ color: "#666872" }}>
        {description.length > 150 && "..."}
        {description.slice(0, 150)}
      </Typography>
    </Stack>
  );
};
