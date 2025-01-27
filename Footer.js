import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#333",
        color: "white",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <Typography variant="body2">© 2025 Shifana Sherin. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
