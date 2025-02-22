// React Stuff
import { JSX } from "react";
import { NavLink } from "react-router-dom";

// Material
import { Stack, Typography } from "@mui/material";

import { Category } from "../../../@types/api.types";

export const CategoryCard: React.FC<{ category: Category; color: string }> = ({
  category,
  color,
}): JSX.Element => {
  return (
    <Stack
      key={category.id}
      alignItems='center'
      width={159}
      height={162}
      bgcolor={color}
      borderRadius='200px'
      pb='100px'
      sx={{
        gap: "10px",
        "&:hover": {
          height: "204px",
          gap: "30px",
          "& p": {
            fontSize: "20px",
          },
        },
        transition: "all 0.7s",
        textDecoration: "none",
      }}
      component={NavLink}
      to='/'
    >
      <Stack>
        <img
          src={category.image}
          alt=''
          // width={104}
          height={95}
          style={{ borderRadius: "20px" }}
        />
      </Stack>
      <Typography
        variant='body2'
        fontWeight={400}
        sx={{ transition: "all 0.7s", color: "black", minWidth: "max-content" }}
      >
        {category.fa_title}
      </Typography>
    </Stack>
  );
};
