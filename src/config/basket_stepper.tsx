import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

export const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      border: "1px dashed #79D52E",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      border: "1px dashed #79D52E",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: "1px dashed #EAEBF0",
    backgroundColor: "transparent",
    borderRadius: 1,
  },
}));

import { StepIconProps } from "@mui/material/StepIcon";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FmdBadOutlinedIcon from "@mui/icons-material/FmdBadOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(() => ({
  backgroundColor: "transparent",
  border: "1px solid #666872",
  zIndex: 1,
  color: "#666872",
  width: 41,
  height: 41,
  display: "flex",
  borderRadius: "10px",
  justifyContent: "center",
  alignItems: "center",
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundColor: "white",
        border: "1px solid #79D52E",
        color: "#79D52E",
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundColor: "#79D52E",
        border: "1px solid #79D52E",
        color: "white",
      },
    },
  ],
}));

export const ColorlibStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement<unknown> } = {
    1: <ShoppingCartCheckoutIcon />,
    2: <FmdBadOutlinedIcon />,
    3: <CreditScoreOutlinedIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
};
