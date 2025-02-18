// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export const ThemeAndPhone: React.FC = (): JSX.Element => {
  return (
    <Stack direction='row' alignItems='center' spacing='15px'>
      {/* Info */}
      <Stack spacing='5px' alignItems='end'>
        <Typography fontSize='12px' fontWeight={300} sx={{ color: "#666872" }}>
          تماس با ما
        </Typography>
        <Typography fontSize='12px' fontWeight={300} color='secondary.dark'>
          ۰۹۰۱۵۸۲۰۵۷۱
        </Typography>
      </Stack>

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
  );
};
