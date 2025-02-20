// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";

// Components
import { ProductCardFirstRow } from "./FirstRow/FirstRow";
import { ProductCardLastRow } from "./LastRow/LastRow";

import { Product } from "../../../@types/api.types";

export const ProductCard: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  return (
    <Stack
      position='relative'
      sx={{
        width: {
          xs: "178px",
          lg: "244px",
        },
        padding: {
          xs: "10px",
          lg: "15px",
        },
        gap: {
          xs: "10px",
          lg: "15px",
        },
        top: "0px",
        "&:hover": {
          boxShadow: "0 10px 30px 0px rgba(0, 0, 0, 0.1)",
          "& button": {
            opacity: "1",
          },
        },
        transition: "all 0.5s",
        bgcolor: "white",
        borderRadius: "10px",
        textDecoration: "none",
      }}
      component={NavLink}
      to='/'
    >
      <ProductCardFirstRow product={product} />

      <Typography textAlign='right' sx={{ height: "50px", color: "black" }}>
        {product.title.slice(0, 50)}
        {product.title.length > 50 && "..."}
      </Typography>

      <ProductCardLastRow product={product} />
    </Stack>
  );
};
