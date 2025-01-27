import React from "react";
import { Box, Typography, Button, IconButton, Avatar } from "@mui/material";
//import { LinkedIn, GitHub, Telegram, Instagram, Code } from "@mui/icons-material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: "100vh",
        background: "#f9f9f9",
        padding: "2rem",
      }}
    >
      {/* Hero Content */}
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Hi There,
          <br />
          I'm <span style={{ color: "#ff5722" }}>Shifana Sherin</span>
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          I am into Web Development
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#ff5722",
            "&:hover": { backgroundColor: "#e64a19" },
            borderRadius: "20px",
            mt: 2,
          }}
        >
          About Me
        </Button>

        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: "1rem", mt: 3 }}>
          <IconButton
            href="https://linkedin.com"
            target="_blank"
            sx={{ color: "#0077b5" }}
          >
            {/* <LinkedIn fontSize="large" /> */}
          </IconButton>
          <IconButton
            href="https://github.com"
            target="_blank"
            sx={{ color: "black" }}
          >
            {/* <GitHub fontSize="large" /> */}
          </IconButton>
          <IconButton
            href="https://telegram.com"
            target="_blank"
            sx={{ color: "#0088cc" }}
          >
            {/* <Telegram fontSize="large" /> */}
          </IconButton>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            sx={{ color: "#c32aa3" }}
          >
            {/* <Instagram fontSize="large" /> */}
          </IconButton>
          <IconButton
            href="https://dev.to"
            target="_blank"
            sx={{ color: "black" }}
          >
            {/* <Code fontSize="large" /> */}
          </IconButton>
        </Box>
      </Box>

      {/* Hero Image */}
      <Box>
        <Avatar
          src="/path/to/your-avatar.png"
          alt="Shifana Sherin"
          sx={{
            width: 300,
            height: 300,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
