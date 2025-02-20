// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

// Components
import { HomeSlider } from "../../components/HomePage/Slider/Slider";
import { HomeCategories } from "../../components/HomePage/Categories/HomeCategories";
import { MostSaledProducts } from "../../components/HomePage/MostSaledPeoducts/MostSaledProducts";

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

        <MostSaledProducts />
      </Stack>
    </>
  );
};
