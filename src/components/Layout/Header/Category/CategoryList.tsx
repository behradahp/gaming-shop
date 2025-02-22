// React Stuff
import { JSX } from "react";

// Material
import { Button, Stack, Typography } from "@mui/material";

// Components
import { CategoryListModal } from "./CategoryListModal";

// Constants
import { categories } from "../../../../constants/categories";

export const CategoryList: React.FC = (): JSX.Element => {
  return (
    <Stack direction='row' spacing='20px' mt={3} mb={1}>
      {categories.map((category) => {
        return (
          <Button
            key={category.id}
            startIcon={<category.icon sx={{ color: "#666872" }} />}
            color='secondary'
            sx={{
              my: "20px",
              "&:hover": {
                "& div.category-modal": {
                  visibility: "visible",
                  opacity: 1,
                },
              },
            }}
          >
            <Typography
              variant='body2'
              fontWeight='300'
              sx={{ color: "#666872" }}
            >
              {category.fa_title}
            </Typography>

            {category.subcategory.length != 0 && (
              <CategoryListModal
                subcategory={category.subcategory}
                image={category.image}
              />
            )}
          </Button>
        );
      })}
    </Stack>
  );
};
