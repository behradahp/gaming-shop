// React Stuff
import { JSX } from "react";

// Material
import { Stack, Typography } from "@mui/material";

// Types
import { subCategory } from "../../../../@types/api.types";

export const CategoryListModal: React.FC<{
  subcategory: subCategory[];
  image: string;
}> = ({ subcategory, image }): JSX.Element => {
  return (
    <Stack
      className='category-modal'
      position='absolute'
      top='120%'
      left={0}
      direction='row'
      spacing={30}
      zIndex={100000}
      p='40px'
      bgcolor='white'
      borderRadius='10px'
      sx={{
        boxShadow: "0 10px 30px 0px rgba(0, 0, 0, 0.5)",
        visibility: "hidden",
        opacity: 0,
        transition: "all 0.6s",
      }}
    >
      <Stack maxHeight={350} flexWrap='wrap' gap='0 50px'>
        {subcategory.map((item) => {
          return (
            <Stack key={item.id} direction='row' spacing={1} height={120}>
              <item.icon color='secondary' />
              <Typography sx={{ minWidth: "max-content" }}>
                {item.fa_title}
              </Typography>
            </Stack>
          );
        })}
      </Stack>

      <Stack justifyContent='flex-end'>
        <img src={image} alt='category-image' width={162} height={"auto"} />
      </Stack>
    </Stack>
  );
};
