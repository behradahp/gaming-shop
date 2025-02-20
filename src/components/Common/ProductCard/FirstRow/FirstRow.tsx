// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

// Components
import { ProductCardImage } from "./Image";
import { ProductCardLabel } from "./Label";
import { ProductCardCompareIcon } from "./Compare";

import { Product } from "../../../../@types/api.types";

export const ProductCardFirstRow: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  return (
    <Stack
      position='relative'
      sx={{
        gap: {
          xs: "4px",
          lg: "10px",
        },
        paddingTop: {
          xs: "31px",
          lg: "42px",
        },
      }}
    >
      <ProductCardImage image={product.images[0]} />
      <ProductCardLabel />
      <ProductCardCompareIcon />
    </Stack>
  );
};
