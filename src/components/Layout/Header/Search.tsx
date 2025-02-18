// React Stuff
import { JSX } from "react";

// Material
import { Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Search: React.FC = (): JSX.Element => {
  return (
    <Stack width={512}>
      <TextField
        placeholder='دنبال چه محصولی هستی؟'
        color='secondary'
        slotProps={{
          input: {
            startAdornment: <SearchIcon sx={{ color: "#AFB1BA" }} />,
            sx: {
              py: "4px",
              width: "240px",
              bgcolor: "white",
              borderRadius: "10px",
            },
          },
        }}
        size='small'
      />
    </Stack>
  );
};
