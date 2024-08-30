import {
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import library from "./assets/library.svg";
import { theme } from "./theme";
import Countdown from "./components/Countdown";
import DonateButton from "./components/DonateButton";

function App() {
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const getFontSize = () => {
    return isMdUp ? 80 : isSmUp ? 50 : 35;
  };

  return (
    <>
      <Box
        sx={{
          p: 0,
          m: 0,
          position: "absolute",
          backgroundImage: `url(${library})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          filter: "blur(5px)",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          zIndex: -1, // Behind the text
        }}
      />
      <Box 
        sx={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* <Box
          component="img"
          src={person1}
          alt="Person"
          sx={{
            position: "absolute",
            left: 10,
            bottom: 0,
            width: { xs: "30vw", sm: "25vw", md: "20vw" }, // Adjust for different screen sizes
            height: "auto", // Maintain aspect ratio
            zIndex: 2,
          }}
        />
        <Box
          component="img"
          src={person2}
          alt="Person"
          sx={{
            position: "absolute",
            right: 10,
            transform:'scale(-1,1)',
            bottom: 0,
            width: { xs: "25vw", sm: "20vw", md: "16vw" }, // Adjust for different screen sizes
            height: "auto", // Maintain aspect ratio
            zIndex: 2,
          }}
        /> */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{mb:50,mt:20}}
        >
          <Typography
            variant="h1"
            fontWeight='bold'
            fontSize={getFontSize()}
            sx={{ mb: 10, mt: 20, textAlign: "center" }}
          >
            کتابخانه آزاد پارسی
          </Typography>
          <Typography
            variant="caption"
            fontSize={getFontSize() / 3}
            sx={{
              mb: isMdUp ? "50" : "20",
              maxWidth: "70%",
              textAlign: "center",
            }}
          >
            به کتابخانه آزاد پارسی خوش آمدید. این کتابخانه مجموعه‌ای از کتاب‌ها
            را که تحت مجوز کریتیو کامنز است، به شما ارائه خواهد داد. هدف ما دسترسی
            آسان و رایگان به منابع علمی و فرهنگی برای همگان است. در این صفحه،
            شما می‌توانید شمارش معکوس را برای شروع دسترسی به کتابخانه آزاد پارسی
            دنبال کنید.
          </Typography>
        </Box>
        <Countdown />
        <DonateButton/>
      </Box>
    </>
  );
}

export default App;
