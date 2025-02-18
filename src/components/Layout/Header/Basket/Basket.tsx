// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

export const Basket: React.FC = (): JSX.Element => {
  return (
    <Button
      variant='contained'
      startIcon={
        <Stack
          justifyContent='center'
          alignItems='center'
          width={34}
          height={34}
          bgcolor='white'
          borderRadius='7px'
        >
          <LocalGroceryStoreOutlinedIcon />
        </Stack>
      }
      sx={{
        bgcolor: "#EAEBF0",
        color: "#666872",
        borderRadius: "10px",
        padding: "7px 38px 7px 10px",
        fontWeight: "200",
      }}
      disableElevation
    >
      سبد خریدت خالیه!
    </Button>
  );
};
