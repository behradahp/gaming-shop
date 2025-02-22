// React Stuff
import { JSX, useEffect, useRef } from "react";
import Slider from "react-slick";
import { HomeSliderSettings } from "../../../config/slider";

// Material
import { Stack } from "@mui/material";

// Components
import { SliderArrows } from "./Arrows";

// Images
import slide1 from "../../../assets/images/home_slider/slide 1.jpg";
import slide2 from "../../../assets/images/home_slider/slide 2.jpg";
import slide3 from "../../../assets/images/home_slider/slide 3.jpg";
import slide4 from "../../../assets/images/home_slider/slide 4.jpg";
import slide5 from "../../../assets/images/home_slider/slide 5.jpg";
import slide6 from "../../../assets/images/home_slider/slide 6.jpg";
import slide7 from "../../../assets/images/home_slider/slide 7.jpg";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

export const HomeSlider: React.FC = (): JSX.Element => {
  let sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (sliderRef.current) sliderRef.current.slickPlay();
  }, [sliderRef]);

  return (
    <Stack
      position='relative'
      justifyContent='center'
      sx={{
        margin: {
          xs: "31px 0 80px 0",
          lg: "40px 0 68px 0",
        },
        paddingX: {
          xs: "30px",
          lg: "70px",
        },
      }}
    >
      <SliderArrows
        next={() => sliderRef.current?.slickNext()}
        prev={() => sliderRef.current?.slickPrev()}
      />

      <Slider ref={sliderRef} {...HomeSliderSettings}>
        {images.map((image, index) => {
          return (
            <Stack
              key={image}
              sx={{
                height: {
                  xs: "265px",
                  lg: "444px",
                },
              }}
              borderRadius='15px'
              overflow='hidden'
            >
              <img
                key={index}
                src={image}
                alt='slider-image'
                width='100%'
                height='100%'
              />
            </Stack>
          );
        })}
      </Slider>
    </Stack>
  );
};
