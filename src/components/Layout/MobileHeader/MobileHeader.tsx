// React Stuff
import { JSX } from "react";

// Matrial
import { AppBar, Button, Stack, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

// Component
import { Search } from "./Search";

// Icons
import mainIcon from "../../../assets/icons/main-icon.svg";

export const MobileHeader: React.FC = (): JSX.Element => {
  return (
    <AppBar
      position='relative'
      sx={{ bgcolor: "white", padding: "20px 30px" }}
      elevation={0}
    >
      {/* First Row */}
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        mb='20px'
      >
        <Button
          variant='outlined'
          sx={{
            borderColor: "#EAEBF0",
            borderRadius: "10px",
            minWidth: "48px",
            padding: 0,
            height: "48px",
          }}
        >
          <MenuOutlinedIcon
            sx={{ color: "secondary.dark" }}
            fontSize='medium'
          />
        </Button>
        <img src={mainIcon} alt='main-icon' width={115} height={64} />
        <Stack spacing='5px' alignItems='end'>
          <Typography
            fontSize='12px'
            fontWeight={300}
            sx={{ color: "#666872" }}
          >
            تماس با ما
          </Typography>
          <Typography fontSize='12px' fontWeight={300} color='secondary.dark'>
            ۰۹۰۱۵۸۲۰۵۷۱
          </Typography>
        </Stack>
      </Stack>

      {/* Second Row */}
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        gap={2}
      >
        <Search />

        <Button
          variant='outlined'
          sx={{
            borderColor: "#EAEBF0",
            borderRadius: "10px",
            minWidth: "48px",
            padding: 0,
            height: "48px",
          }}
        >
          <DarkModeOutlinedIcon
            sx={{ color: "secondary.dark" }}
            fontSize='medium'
          />
        </Button>
      </Stack>
    </AppBar>
  );
};
