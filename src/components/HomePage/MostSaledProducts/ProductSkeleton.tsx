// React Stuff
import { JSX } from "react";

// Material
import { Skeleton, Stack } from "@mui/material";

export const ProductSkeleton: React.FC = (): JSX.Element => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      width='100%'
      sx={{ overflowX: "auto" }}
    >
      {Array(5)
        .fill(0)
        .map((item, index) => {
          return (
            <Stack key={item + index} width={244} p={2}>
              <Skeleton
                variant='rounded'
                sx={{
                  width: "168px",
                  height: "168px",
                  alignSelf: "center",
                }}
              />
              <Skeleton
                variant='rounded'
                sx={{
                  width: "78px",
                  height: "28px",
                  my: "15px",
                }}
              />
              <Skeleton
                variant='rounded'
                sx={{
                  width: "100%",
                  height: "28px",
                }}
              />
              <Skeleton
                variant='rounded'
                sx={{
                  width: "50%",
                  height: "28px",
                  my: "5px",
                }}
              />
            </Stack>
          );
        })}
    </Stack>
  );
};
