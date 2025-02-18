// React Stuff
import { JSX } from "react";

// Matrial
import { AppBar, Stack } from "@mui/material";

// Component
import { Search } from "./Search";
import { UserProfile } from "./UserProfile";
import { Basket } from "./Basket/Basket";
import { CategoryList } from "./CategoryList";
import { ThemeAndPhone } from "./ThemeAndPhone";

// Icons
import mainIcon from "../../../assets/icons/main-icon.svg";

export const Header: React.FC = (): JSX.Element => {
  return (
    <AppBar
      position='relative'
      sx={{ bgcolor: "white", padding: "14px 70px 15px 70px" }}
      elevation={0}
    >
      {/* First Row */}
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Search />
        <img src={mainIcon} alt='main-icon' width={115} height={64} />
        <Stack direction='row' justifyContent='end' spacing='15px' width={512}>
          <UserProfile />
          <Basket />
        </Stack>
      </Stack>

      {/* Second Row */}
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <CategoryList />
        <ThemeAndPhone />
      </Stack>
    </AppBar>
  );
};
