// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";

// Components
import { ProductCardFirstRow } from "./FirstRow/FirstRow";
import { ProductCardLastRow } from "./LastRow/LastRow";

import { Product } from "../../../@types/api.types";

// Icons
import discountPercent from "../../../assets/icons/discount-percent.svg";

export const ProductCard: React.FC<{
  product: Product;
  isDiscount?: boolean;
}> = ({ product, isDiscount = false }): JSX.Element => {
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
      {/* Discount */}
      {isDiscount && (
        <Stack
          alignItems='center'
          justifyContent='center'
          position='absolute'
          left={0}
          top='15px'
        >
          <img src={discountPercent} alt='' width={52} height={26} />
          <Typography sx={{ color: "white", position: "absolute" }}>
            {Math.round(
              ((product.default_variant.price.rrp_price -
                product.default_variant.price.selling_price) /
                product.default_variant.price.rrp_price) *
                100
            ).toLocaleString("fa")}{" "}
            ٪
          </Typography>
        </Stack>
      )}

      <ProductCardFirstRow product={product} />

      <Typography
        textAlign='left'
        sx={{
          fontSize: { xs: "14px", lg: "17px" },
          height: "50px",
          color: "black",
          direction: "ltr",
        }}
      >
        {product.title_fa.slice(0, 40)}
        {product.title_fa.length > 40 && "..."}
      </Typography>

      {product.status === "out_of_stock" ? (
        <Typography
          textAlign='end'
          sx={{ color: "#A1A3A8", height: { xs: "38px", lg: "48px" } }}
        >
          ناموجود
        </Typography>
      ) : (
        <ProductCardLastRow product={product} isDiscount={isDiscount} />
      )}
    </Stack>
  );
};
