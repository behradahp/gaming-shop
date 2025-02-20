// React Stuff
import { JSX, useState } from "react";

// Material
import { Button, Stack } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

// Components
import { EmptyBasketModal } from "./EmptyBasketModal";

export const EmptyBasket: React.FC = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
        position: "relative",
        bgcolor: "#EAEBF0",
        color: "#666872",
        borderRadius: "10px",
        padding: "7px 38px 7px 10px",
        fontWeight: "200",
      }}
      disableElevation
      onClick={() => setIsModalOpen((prev) => !prev)}
    >
      سبد خریدت خالیه!
      {isModalOpen && <EmptyBasketModal />}
    </Button>
  );
};
