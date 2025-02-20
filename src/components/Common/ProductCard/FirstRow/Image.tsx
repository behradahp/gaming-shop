// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

export const ProductCardImage: React.FC<{ image: string }> = ({
  image,
}): JSX.Element => {
  return (
    <Stack
      sx={{
        width: { xs: "112px", lg: "168px" },
        height: { xs: "112px", lg: "168px" },
        borderRadius: "10px",
        overflow: "hidden",
      }}
      alignSelf='center'
    >
      <img src={image} alt='product-image' width='100%' height='100%' />
    </Stack>
  );
};
