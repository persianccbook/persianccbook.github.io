import { Box, Typography } from "@mui/material";
import { FaInstagram, FaMastodon, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={5}
      marginY={4}
    >
      <Typography variant="body2">
        ما را در شبکه های اجتماعی دنبال کنید:
      </Typography>
      <Box display="flex" gap={2}>
        <motion.a
          initial={{
            color: 'white',
            backgroundImage:"unset"
          }}
          whileHover={{
            color:'white',
            backgroundImage: 'linear-gradient(to right, #fbad50, #cd486b)',
            borderRadius:'50%'
          }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '25px', // adjust the width to your liking
            height: '25px' // adjust the height to your liking
          }}
          href="https://instagram.com/persianccbook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          initial={{
            color: "white",
          }}
          whileHover={{
            color: "#0088cc",
            backgroundColor:'white',
            borderRadius:'50%'
          }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '25px', // adjust the width to your liking
            height: '25px' // adjust the height to your liking
          }}
          href="https://t.me/persianccbook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </motion.a>
        <motion.a
          initial={{
            color: "white",
          }}
          whileHover={{
            color: " #6364FF",
            backgroundColor:'white',
            borderRadius:'50%'
          }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '25px', // adjust the width to your liking
            height: '25px' // adjust the height to your liking
          }}
          href="https://bookstodon.com/@PersianCCBook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMastodon />
        </motion.a>
        <motion.a
          initial={{
            color: "white",
          }}
          whileHover={{
            color: " #020202",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "25px", // adjust the width to your liking
            height: "25px", // adjust the height to your liking
          }}
          href="https://x.com/persianccbook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </motion.a>
      </Box>
    </Box>
  );
};

export default SocialMedia;
