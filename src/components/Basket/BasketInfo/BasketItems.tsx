// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";

// Context
import { useStore } from "../../../context/store";
import { BasketItemCard } from "./Card/BasketItemCard";
import { BasketItemMobileCard } from "./MobileCard/BasketItemCard";

export const BasketItems: React.FC = (): JSX.Element => {
  const { store, dispatch } = useStore();

  return (
    <Stack flexGrow={1} gap={2} sx={{ p: { xs: 0, lg: 2 } }}>
      {store.basket.length ? (
        store.basket.map((item) => {
          return (
            <Stack key={item.product_id}>
              {store.mobileView.is ? (
                <BasketItemMobileCard item={item} dispatch={dispatch} />
              ) : (
                <BasketItemCard item={item} dispatch={dispatch} />
              )}
            </Stack>
          );
        })
      ) : (
        <Typography variant='h5' fontWeight={800} textAlign='center'>
          سبد خرید خالی است!
        </Typography>
      )}
    </Stack>
  );
};
