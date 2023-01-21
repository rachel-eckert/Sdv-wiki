import React from "react";
import {
  Box,
  Toolbar,
  Typography,
  AppBar,
  Slide,
  CssBaseline,
  useScrollTrigger,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Box sx={{ flexGrow: 1, mt: 0, mb: 5 }}>
      <AppBar position="static" sx={{ bgcolor: "#151152" }}>
        <Toolbar>
          <Typography variant="h5">All Things Stardew</Typography>
          <nav>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{ mr: 3, ml: 3, color: "#FFFFFF" }}>
              Home
            </Typography>
            <Typography
              variant="h5"
              component={Link}
              to="/characters"
              sx={{ mr: 3, ml: 3, color: "#FFFFFF" }}>
              Characters
            </Typography>
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
