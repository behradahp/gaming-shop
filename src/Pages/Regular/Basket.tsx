// React Stuff
import { JSX } from "react";

// Material
import { Stack, Step, StepLabel, Stepper } from "@mui/material";

// Components
import { BasketInfo } from "../../components/Basket/BasketInfo/BasketInfo";

// Config
import {
  ColorlibConnector,
  ColorlibStepIcon,
} from "../../config/basket_stepper";

const allSteps = ["سبد خرید", "ثبت آدرس و شیوه ارسال", "شیوه پرداخت"];

export const BasketPage: React.FC = (): JSX.Element => {
  return (
    <Stack
      alignItems='center'
      sx={{ mt: { xs: "15px", lg: "43px" }, gap: { xs: "30px", lg: "40px" } }}
    >
      <Stack
        width={518}
        sx={{
          width: {
            xs: "95%",
            lg: "718px",
          },
        }}
      >
        <Stepper
          alternativeLabel
          activeStep={0}
          connector={<ColorlibConnector />}
        >
          {allSteps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>

      <Stack width='100%'>
        <BasketInfo />
      </Stack>
    </Stack>
  );
};
