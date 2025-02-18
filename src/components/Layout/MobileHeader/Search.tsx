// React Stuff
import { JSX } from "react";

// Material
import { Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Search: React.FC = (): JSX.Element => {
  return (
    <Stack flexGrow={1}>
      <TextField
        fullWidth
        placeholder='دنبال چه محصولی هستی؟'
        color='secondary'
        slotProps={{
          input: {
            startAdornment: <SearchIcon sx={{ color: "#AFB1BA" }} />,
            sx: {
              py: "4px",
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
