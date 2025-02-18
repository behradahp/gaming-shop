// React Stuff
import { JSX } from "react";
import { useLocation } from "react-router-dom";

// Material
import { Stack } from "@mui/material";

// Components
import { HomeLink } from "./HomeLink";
import { BasketLink } from "./BasketLink";
import { UserLink } from "./UserLink";

export const MobileDownMenu: React.FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <Stack
      position='fixed'
      bottom={0}
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      width='100%'
      height='84px'
      bgcolor='white'
    >
      <HomeLink pathname={location.pathname} />

      <BasketLink pathname={location.pathname} />

      <UserLink pathname={location.pathname} />
    </Stack>
  );
};
