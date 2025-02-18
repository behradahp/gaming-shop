// React Stuff
import { JSX } from "react";

// Material
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Button } from "@mui/material";

export const MobileMenu: React.FC = (): JSX.Element => {
  return (
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
      <MenuOutlinedIcon sx={{ color: "secondary.dark" }} fontSize='medium' />
    </Button>
  );
};
