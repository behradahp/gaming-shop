// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";

// Components
import { ProductSkeleton } from "./ProductSkeleton";
import { ProductList } from "./ProductList";

// API
import { useAxios } from "../../../hook/useAxios";
import { Product } from "../../../@types/api.types";

// Category
import { categories } from "../../../constants/categories";

const gameCategory = categories[5];

export const SomeGames: React.FC = (): JSX.Element => {
  const { data, isLoading } = useAxios<Product[], null>(gameCategory.url, {
    method: "GET",
  });

  return (
    <Stack
      alignItems='center'
      sx={{
        gap: { xs: "31px", lg: "41px" },
        marginTop: { xs: "81px", lg: "100px" },
      }}
    >
      <Stack direction='row' alignItems='center' spacing='18px'>
        <gameCategory.icon fontSize='large' color='secondary' />
        <Typography
          variant='h5'
          fontWeight={600}
          sx={{ color: "secondary.dark" }}
        >
          بازی ها
        </Typography>
        <Stack pl='18px' borderLeft='1px solid #666872'>
          <Typography
            variant='body1'
            fontWeight={300}
            sx={{ color: "#666872", textDecoration: "none" }}
            component={NavLink}
            to='/'
          >
            مشاهده همه
          </Typography>
        </Stack>
      </Stack>

      {isLoading ? <ProductSkeleton /> : <ProductList data={data} />}
    </Stack>
  );
};
