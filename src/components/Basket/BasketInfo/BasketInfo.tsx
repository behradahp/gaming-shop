// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

// Components
import { BasketItems } from "./BasketItems";
import { TotalBasket } from "./TotalBasket";

export const BasketInfo: React.FC = (): JSX.Element => {
  return (
    <>
      <Stack
        width='100%'
        position='relative'
        sx={{
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: "23px",
          paddingX: {
            xs: "30px",
            lg: "70px",
          },
          marginBottom: {
            xs: "120px",
            lg: "0px",
          },
        }}
      >
        <BasketItems />
        <TotalBasket />
      </Stack>
    </>
  );
};
