// React Stuff
import { JSX } from "react";

// Material
import { Button, ButtonGroup } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const ChangeBasketButtons: React.FC<{
  count: number;
  increaseFC: () => void;
  decreaseFC: () => void;
}> = ({ count, increaseFC, decreaseFC }): JSX.Element => {
  return (
    <ButtonGroup
      variant='outlined'
      color='secondary'
      sx={{ borderColor: "#EAEBF0" }}
    >
      <Button
        sx={{
          borderColor: "#EAEBF0",
          minWidth: "35px",
          p: "0",
          borderRadius: "10px",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          increaseFC();
        }}
      >
        <KeyboardArrowUpIcon color='success' />
      </Button>
      <Button
        sx={{
          color: "black",
          borderColor: "#EAEBF0",
          px: { xs: "0px", lg: "18.5px" },
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {count}
      </Button>
      <Button
        sx={{
          borderColor: "#EAEBF0",
          minWidth: "35px",
          p: "0",
          borderRadius: "10px",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          decreaseFC();
        }}
      >
        <KeyboardArrowDownIcon color='error' />
      </Button>
    </ButtonGroup>
  );
};
