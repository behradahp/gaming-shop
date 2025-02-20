// React Stuff
import { JSX } from "react";

// Material
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const FirstAddButton: React.FC<{ addFC: () => void }> = ({
  addFC,
}): JSX.Element => {
  return (
    <IconButton
      sx={{
        width: {
          xs: "38px",
          lg: "48px",
        },
        height: {
          xs: "38px",
          lg: "48px",
        },
        bgcolor: "primary.main",
        borderRadius: "8px",
        "&:hover": {
          bgcolor: "#5a9628",
        },
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addFC();
      }}
    >
      <AddShoppingCartIcon sx={{ color: "white" }} />
    </IconButton>
  );
};
