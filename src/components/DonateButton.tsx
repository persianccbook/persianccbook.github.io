import { Box, Button, useMediaQuery } from "@mui/material";
import { theme } from "../theme";

function DonateButton() {
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const getFontSize = () => {
    return isMdUp ? 80 : isSmUp ? 50 : 35;
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button
        variant="contained"
        href="https://daramet.com/MrArsenic" // Replace with your actual donate link
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          p: "10px 20px",
          fontSize: getFontSize() / 3,
          borderRadius: "20px",
        }}
      >
        حمایت از طراح سایت
      </Button>
    </Box>
  );
}

export default DonateButton;
