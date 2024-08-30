import {
  Box,
  Divider,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import useCountdown from "../hooks/useCountdown";
import { theme } from "../theme";

const Countdown = () => {
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { days, hours, minutes, seconds } = useCountdown({
    endDate: "September 1 2024 18:00:00",
  });

  const getFontSize = () => {
    return isMdUp ? 80 : isSmUp ? 50 : 35;
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <List sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <ListItem
          sx={{
            border: "solid",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            m: 3,
          }}
        >
          <Typography variant="h3" fontSize={getFontSize()}>
            {String(days).padStart(2, "0")}
          </Typography>
          <Divider
            sx={{
              width: "100%",
              my: 1,
              bgcolor: "white",
              height: "2px",
            }}
          />
          <Typography component="span">روز</Typography>
        </ListItem>
        <ListItem
          sx={{
            border: "solid",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            m: 3,
          }}
        >
          <Typography variant="h3" fontSize={getFontSize()}>
            {String(hours).padStart(2, "0")}
          </Typography>
          <Divider
            sx={{
              width: "100%",
              my: 1,
              bgcolor: "white",
              height: "2px",
            }}
          />
          <Typography component="span">ساعت</Typography>
        </ListItem>
        <ListItem
          sx={{
            border: "solid",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            m: 3,
          }}
        >
          <Typography variant="h3" fontSize={getFontSize()}>
            {String(minutes).padStart(2, "0")}
          </Typography>
          <Divider
            sx={{
              width: "100%",
              my: 1,
              bgcolor: "white",
              height: "2px",
            }}
          />
          <Typography component="span">دقیقه</Typography>
        </ListItem>
        <ListItem
          sx={{
            border: "solid",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            m: 3,
          }}
        >
          <Typography variant="h3" fontSize={getFontSize()}>
            {String(seconds).padStart(2, "0")}
          </Typography>
          <Divider
            sx={{
              width: "100%",
              my: 1,
              bgcolor: "white",
              height: "2px",
            }}
          />
          <Typography component="span">ثانیه</Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Countdown;
