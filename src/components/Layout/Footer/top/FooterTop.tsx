// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

// Components
import { ShopPresent } from "./ShopPresent";
import { Subscribe } from "./Sunsctibe";

export const FooterTop: React.FC = (): JSX.Element => {
  return (
    <Stack
      position='absolute'
      top={0}
      sx={{
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        padding: {
          xs: "20px",
          lg: "50px",
        },
        justifyContent: {
          xs: "start",
          lg: "space-between",
        },
        alignItems: "center",
        gap: {
          xs: "47px",
          lg: "0px",
        },
      }}
      width='85%'
      bgcolor='secondary.main'
      borderRadius='15px'
    >
      <ShopPresent />

      <Subscribe />
    </Stack>
  );
};
