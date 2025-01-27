// import React from "react";
import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ background: "white", boxShadow: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#333", textTransform: "uppercase" }}
        >
          Shifana Sherin
        </Typography>
        <Box>
          {["Home", "About", "Skills", "Education"].map((text, index) => (
            <Button
              key={index}
              component={Link}
              to={`/${text.toLowerCase()}`} // Dynamically link to paths like "/home", "/about"
              sx={{
                color: "#333",
                margin: "0 0.5rem",
                textTransform: "capitalize",
                "&:hover": { color: "#ff5722" },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
