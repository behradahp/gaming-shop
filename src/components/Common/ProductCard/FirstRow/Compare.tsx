// React Stuff
import { JSX } from "react";

// Material
import { Button } from "@mui/material";
import BalanceIcon from "@mui/icons-material/Balance";

export const ProductCardCompareIcon: React.FC = (): JSX.Element => {
  return (
    <Button
      variant='outlined'
      sx={{
        opacity: {
          xs: "1",
          lg: "0",
        },
        transition: "all 0.5s",
        position: "absolute",
        top: "0",
        right: "0",
        borderColor: "#EAEBF0",
        borderRadius: {
          xs: "5px",
          lg: "10px",
        },
        minWidth: {
          xs: "29px",
          lg: "40px",
        },
        padding: 0,
        height: {
          xs: "29px",
          lg: "40px",
        },
      }}
    >
      <BalanceIcon
        sx={{
          color: "secondary.dark",
          fontSize: {
            xs: "18px",
            lg: "24px",
          },
        }}
      />
    </Button>
  );
};
