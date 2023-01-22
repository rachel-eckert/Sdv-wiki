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

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 0, mb: 14 }}>
        <HideOnScroll {...props}>
          <AppBar sx={{ bgcolor: "#151152" }}>
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
                <Typography
                  variant="h5"
                  component={Link}
                  to="/cc"
                  sx={{ mr: 3, ml: 3, color: "#FFFFFF" }}>
                  Community Center Guide
                </Typography>
              </nav>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
    </>
  );
};

export default Navbar;
