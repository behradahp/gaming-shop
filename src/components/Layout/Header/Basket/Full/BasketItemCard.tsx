// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, Typography } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Type
import { Basket } from "../../../../../context/types.store";

export const BasketItemCard: React.FC<{
  item: Basket;
  deleteFC: () => void;
  increaseFC: () => void;
  decreaseFC: () => void;
}> = ({ item, deleteFC, increaseFC, decreaseFC }): JSX.Element => {
  return (
    <Stack spacing='12px' mb='20px'>
      <Stack direction='row' gap='20px'>
        <img
          src={item.product.images.main.url[0]}
          alt='product-image'
          width={87}
          height={87}
        />
        <Typography variant='body2' fontWeight={300} sx={{ color: "black" }}>
          {item.product.title_fa}
        </Typography>
      </Stack>
      <Stack
        pl='19px'
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography variant='body1' fontWeight={600} sx={{ color: "black" }}>
          {item.product.default_variant.price.selling_price.toLocaleString(
            "fa"
          )}{" "}
          تومان
        </Typography>

        <Stack direction='row' spacing='13px'>
          <Stack
            direction='row'
            spacing='8px'
            justifyContent='center'
            alignItems='center'
            width={48}
            height={48}
            border='1px solid #EAEBF0'
            borderRadius='10px'
          >
            <Stack>
              <Button
                sx={{ padding: 0, minWidth: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  increaseFC();
                }}
              >
                <KeyboardArrowUpIcon
                  fontSize='small'
                  sx={{ color: "#666872" }}
                />
              </Button>
              <Button
                sx={{ padding: 0, minWidth: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  decreaseFC();
                }}
              >
                <KeyboardArrowDownIcon
                  fontSize='small'
                  sx={{ color: "#666872" }}
                />
              </Button>
            </Stack>
            <Typography sx={{ fontSize: "14px", color: "#666872" }}>
              {item.count.toLocaleString("fa")}
            </Typography>
          </Stack>
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
            onClick={(e) => {
              e.stopPropagation();
              deleteFC();
            }}
          >
            <DeleteForeverOutlinedIcon color='error' fontSize='medium' />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
