// React Stuff
import { JSX } from "react";
import { Puff } from "react-loader-spinner";

// Material
import { Stack, Typography } from "@mui/material";

// Components
import { HomeCategoryList } from "./CategoryList";

// Constants
import { categories } from "../../../constants/categories";

export const HomeCategories: React.FC = (): JSX.Element => {
  return (
    <Stack
      alignItems='center'
      sx={{
        gap: {
          xs: "20px",
          lg: "35px",
        },
      }}
    >
      {/* Title */}
      <Stack direction='row' spacing='16px' alignItems='center'>
        <Puff
          visible={true}
          height='32'
          width='32'
          color='#79D52E'
          ariaLabel='puff-loading'
          wrapperStyle={{}}
          wrapperClass=''
        />
        <Typography
          variant='h5'
          fontWeight={600}
          sx={{ color: "secondary.dark" }}
        >
          دسته بندی های سایت
        </Typography>
      </Stack>

      {<HomeCategoryList data={categories} />}
    </Stack>
  );
};
