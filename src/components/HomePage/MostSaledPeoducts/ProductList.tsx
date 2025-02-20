// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

import { Product } from "../../../@types/api.types";
import { ProductCard } from "../../Common/ProductCard/ProductCard";

export const ProductList: React.FC<{ data: Product[] }> = ({
  data,
}): JSX.Element => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      width='100%'
      sx={{
        overflowX: "auto",
        flexWrap: { xs: "nowrap", lg: "wrap" },
        gap: { xs: "0 15px", lg: "20px 0" },
        pb: "10px",
        pt: "15px",
      }}
    >
      {data.map((product, index) => {
        if (index > 20) return null;
        return (
          <Stack key={product.id}>
            <ProductCard product={product} />
          </Stack>
        );
      })}
    </Stack>
  );
};
