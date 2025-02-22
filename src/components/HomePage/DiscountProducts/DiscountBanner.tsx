// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

// Images
import discountSvg from "../../../assets/icons/discount.svg";
import discountImg from "../../../assets/images/discountImg.png";

export const DiscountBanner: React.FC = (): JSX.Element => {
  return (
    <Stack spacing='39px' maxWidth='min-content'>
      <Stack direction='row' spacing='13px'>
        <Stack
          sx={{
            width: { xs: "18px", lg: "26px" },
            height: { xs: "18px", lg: "26px" },
          }}
        >
          <img
            src={discountSvg}
            alt='discount-image'
            width='100%'
            height='100%'
          />
        </Stack>
        <Typography
          sx={{
            color: "white",
            fontSize: {
              xs: "12px",
              lg: "24px",
            },
          }}
        >
          تخفیفات داغ
        </Typography>
      </Stack>

      <Stack
        sx={{
          width: { xs: "119px", lg: "249px" },
          height: { xs: "153px", lg: "285px" },
        }}
      >
        <img
          src={discountImg}
          alt='discount-image'
          width='100%'
          height='100%'
        />
      </Stack>

      <Button
        endIcon={<KeyboardBackspaceIcon sx={{ color: "white" }} />}
        sx={{
          color: "white",
          width: "max-content",
          fontSize: {
            xs: "12px",
            lg: "16px",
          },
        }}
      >
        مشاهده همه
      </Button>
    </Stack>
  );
};
