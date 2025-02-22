// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

// Components
import { HomeSlider } from "../../components/HomePage/Slider/Slider";
import { HomeCategories } from "../../components/HomePage/Categories/HomeCategories";
import { MostSaledProducts } from "../../components/HomePage/MostSaledProducts/MostSaledProducts";
import { DiscountProducts } from "../../components/HomePage/DiscountProducts/DiscountProducts";
import { SomeGames } from "../../components/HomePage/SomeGames/SomeGames";
import { SomeGiftCard } from "../../components/HomePage/SomeGiftCards/SomeGiftCard";

export const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      {/* Slider */}
      <HomeSlider />

      {/* MainContent */}
      <Stack
        sx={{
          padding: {
            xs: "0 0 0 30px",
            lg: "0 70px",
          },
          marginBottom: {
            xs: "168px",
            lg: "220px",
          },
        }}
      >
        <HomeCategories />
        <DiscountProducts />
        <MostSaledProducts />
        <SomeGames />
        <SomeGiftCard />
      </Stack>
    </>
  );
};
