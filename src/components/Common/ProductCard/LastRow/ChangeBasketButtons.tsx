// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const ChangeBasketButtons: React.FC<{
  count: number;
  increaseFC: () => void;
  decreaseFC: () => void;
}> = ({ count, increaseFC, decreaseFC }): JSX.Element => {
  return (
    <Stack
      direction='row'
      spacing='8px'
      justifyContent='center'
      alignItems='center'
      width={48}
      height={48}
      border='1px solid #EAEBF0'
      borderRadius='10px'
      sx={{ direction: "ltr" }}
    >
      <Stack>
        <Button
          sx={{ padding: 0, minWidth: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            increaseFC();
          }}
        >
          <KeyboardArrowUpIcon fontSize='small' sx={{ color: "#666872" }} />
        </Button>
        <Button
          sx={{ padding: 0, minWidth: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            decreaseFC();
          }}
        >
          <KeyboardArrowDownIcon fontSize='small' sx={{ color: "#666872" }} />
        </Button>
      </Stack>
      <Typography sx={{ fontSize: "14px", color: "#666872" }}>
        {count.toLocaleString("fa")}
      </Typography>
    </Stack>
  );
};
