// React Stuff
import { JSX } from "react";

// Material
import { Button, ButtonGroup, Stack } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export const BasketItemButtons: React.FC<{
  count: number;
  deleteFC: () => void;
  increaseFC: () => void;
  decreaseFC: () => void;
}> = ({ count, deleteFC, increaseFC, decreaseFC }): JSX.Element => {
  return (
    <Stack direction='row' spacing='10px'>
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
          onClick={increaseFC}
        >
          <KeyboardArrowUpIcon color='success' />
        </Button>
        <Button sx={{ color: "black", borderColor: "#EAEBF0", px: "38.5px" }}>
          {count}
        </Button>
        <Button
          sx={{
            borderColor: "#EAEBF0",
            minWidth: "35px",
            p: "0",
            borderRadius: "10px",
          }}
          onClick={decreaseFC}
        >
          <KeyboardArrowDownIcon color='error' />
        </Button>
      </ButtonGroup>

      <Button
        variant='outlined'
        color='secondary'
        sx={{
          borderColor: "#EAEBF0",
          borderRadius: "10px",
          minWidth: "48px",
          padding: 0,
          height: "48px",
        }}
        onClick={deleteFC}
      >
        <DeleteForeverOutlinedIcon color='error' fontSize='medium' />
      </Button>
    </Stack>
  );
};
