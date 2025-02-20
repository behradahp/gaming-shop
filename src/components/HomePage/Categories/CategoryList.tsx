// React Stuff
import { JSX } from "react";

// Material
import { Stack } from "@mui/material";

import { CategoryCard } from "./CategoryCard";
import { Category } from "../../../@types/api.types";

const colors = [
  "#FDE1E1",
  "#F6FDE1",
  "#E1FDE4",
  "#D0EFFF",
  "#E1E2FD",
  "#F7E1FD",
];

export const HomeCategoryList: React.FC<{ data: Category[] }> = ({
  data,
}): JSX.Element => {
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
      {data.map((category, index) => {
        if (index > 5) return null;
        return (
          <Stack key={category.id}>
            <CategoryCard category={category} color={colors[index]} />
          </Stack>
        );
      })}
    </Stack>
  );
};
