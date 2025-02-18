import { createTheme, ThemeProvider } from "@mui/material/styles";
import { JSX } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "IRANYekanX",
  },
  palette: {
    primary: {
      main: "#79D52E",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#013370",
      dark: "#011222",
      contrastText: "#FFFFFF",
    },
    info: {
      light: "#F6FBFF",
      main: "#014FAF",
      contrastText: "#FFFFFF",
    },
    warning: {
      light: "#FFF8E2",
      main: "#E5AB00",
      contrastText: "#FFFFFF",
    },
    error: {
      light: "#FFF2F4",
      main: "#A62639",
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#ECFFF2",
      main: "#0D8B0B",
      contrastText: "#FFFFFF",
    },
  },
});

export const MUITheme: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
