// React Stuff
import { JSX, useRef } from "react";
import Slider from "react-slick";
import { DiscountSliderSettings } from "../../../../config/slider";

// Material
import { Stack } from "@mui/material";

// Components
import { SliderArrows } from "./Arrows";

// API
import { useAxios } from "../../../../hook/useAxios";
import { APIURL } from "../../../../constants/api.Urls";
import { Product } from "../../../../@types/api.types";
import { ProductCard } from "../../../Common/ProductCard/ProductCard";

export const DiscountProductSlider: React.FC = (): JSX.Element => {
  const { data } = useAxios<Product[], undefined>(APIURL.GetDiscountProducts);

  let sliderRef = useRef<Slider | null>(null);

  return (
    <Stack
      position='relative'
      justifyContent='center'
      sx={{ width: { xs: "55%", sm: "65%" } }}
    >
      <SliderArrows
        next={() => sliderRef.current?.slickNext()}
        prev={() => sliderRef.current?.slickPrev()}
      />

      <Stack width={"100%"}>
        <Slider
          ref={sliderRef}
          {...DiscountSliderSettings}
          className='discount-slider'
        >
          {data.map((product, index) => {
            if (index > 7) return null;
            return (
              <Stack key={product.id}>
                <Stack maxWidth='90%'>
                  <ProductCard product={product} isDiscount />
                </Stack>
              </Stack>
            );
          })}
        </Slider>
      </Stack>
    </Stack>
  );
};
