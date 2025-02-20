// React Stuff
import { JSX } from "react";

// Material
import { Skeleton, Stack } from "@mui/material";

export const CategorySkeleton: React.FC = (): JSX.Element => {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent='center'
      alignItems='end'
      sx={{
        height: {
          xs: "auto",
          lg: "204px",
        },
        gap: {
          xs: "15px",
          lg: "43px",
        },
      }}
    >
      {Array(6)
        .fill(0)
        .map((item, index) => {
          return (
            <Skeleton
              key={item + index}
              variant='circular'
              sx={{ width: "159px", height: "162px" }}
            />
          );
        })}
    </Stack>
  );
};
