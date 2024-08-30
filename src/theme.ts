import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  direction: "rtl",
  spacing: 2,
  typography: {
    fontFamily: "VazirMatn",
  },
  palette: {
    mode: "dark",
    primary: {
      main: red[800],
    },
  },
});
