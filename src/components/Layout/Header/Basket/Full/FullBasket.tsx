// React Stuff
import { JSX, useState } from "react";

// Material
import { Badge, Button, Stack, Typography } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

// Components

// Context
import { useStore } from "../../../../../context/store";
import { FullBasketModal } from "./FullBasketModal";

export const FullBasket: React.FC = (): JSX.Element => {
  const { store, dispatch } = useStore();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const totalPrice = () => {
    const total = store.basket.reduce(
      (acc, curr) =>
        acc + curr.product.default_variant.price.selling_price * curr.count,
      0
    );

    return total;
  };

  return (
    <Button
      variant='contained'
      color='primary'
      startIcon={
        <Stack
          justifyContent='center'
          alignItems='center'
          width={34}
          height={34}
          bgcolor='white'
          color='black'
          borderRadius='7px'
        >
          <LocalGroceryStoreOutlinedIcon />
        </Stack>
      }
      endIcon={
        <Badge
          badgeContent={store.basket.length.toLocaleString("fa")}
          sx={{
            "& .MuiBadge-badge": {
              color: "#79D52E",
              backgroundColor: "white",
            },
          }}
        />
      }
      sx={{
        minWidth: "186px",
        justifyContent: "flex-start",
        position: "relative",
        borderRadius: "10px",
        padding: "7px 25px 7px 10px",
      }}
      disableElevation
      onClick={() => setIsModalOpen((prev) => !prev)}
    >
      <Typography
        textAlign='start'
        sx={{ fontSize: "14px", fontWeight: "600", flexGrow: "1" }}
      >
        {totalPrice().toLocaleString("fa")} تومان
      </Typography>

      {isModalOpen && (
        <FullBasketModal basket={store.basket} dispatch={dispatch} />
      )}
    </Button>
  );
};
