// React Stuff
import { JSX } from "react";

// Material
import { Button, Skeleton, Stack, Typography } from "@mui/material";

// API
import { useAxios } from "../../../hook/useAxios";
import { Category } from "../../../@types/api.types";
import { APIURL } from "../../../constants/api.Urls";

const bannedCategories = ["New Category", "category_B", "string"];

export const CategoryList: React.FC = (): JSX.Element => {
  const { data, isLoading, isError } = useAxios<Category[], null>(
    APIURL.GetCategories,
    { method: "GET" }
  );

  if (isError) {
    return <Typography>مشکلی پیش آمده است!</Typography>;
  }

  if (isLoading) {
    return (
      <Stack direction='row' spacing='5px' mt={3} mb={1}>
        {Array(6)
          .fill(0)
          .map((item, index) => {
            return (
              <Stack key={item + index} direction='row' spacing='5px'>
                <Skeleton
                  variant='rounded'
                  sx={{ width: "20px", height: "20px" }}
                />
                <Skeleton
                  variant='rounded'
                  sx={{ width: "100px", height: "20px" }}
                />
              </Stack>
            );
          })}
      </Stack>
    );
  }

  return (
    <Stack direction='row' spacing='5px' mt={3} mb={1}>
      {data?.map((category, index) => {
        if (bannedCategories.includes(category.name) || index > 7) return null;
        return (
          <Button
            key={category.id}
            startIcon={
              <img
                src={category.image}
                alt='category-icon'
                width={20}
                height={20}
                style={{ borderRadius: "5px" }}
              />
            }
            color='secondary'
            sx={{ my: "20px" }}
          >
            <Typography
              variant='body2'
              fontWeight='300'
              sx={{ color: "#666872" }}
            >
              {category.name}
            </Typography>
          </Button>
        );
      })}
    </Stack>
  );
};
