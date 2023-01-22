import React from "react";
import { Typography, Box } from "@mui/material";
const Home = () => {
  return (
    <Box sx={{ textAlign: "center", width: 1000, margin: "auto" }}>
      <Typography variant="h3">
        Welcome to All Things Stardew Valley!
      </Typography>
      <br />
      <Typography variant="h6">
        Stardew Valley is a simulation role-playing video game developed by Eric
        "ConcernedApe" Barone. Players take the role of a character who takes
        over their deceased grandfather's dilapidated farm in a place known as
        Stardew Valley.
      </Typography>
      <br />
      <Typography variant="h6">
        It is currently available for purchase on Steam for all computer
        operating systems, as well as available for the Nintendo Switch, Xbox
        One, Steamdeck, Android, and IOS.
      </Typography>
      <img
        className="home-image"
        src="https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1666917466"
      />
    </Box>
  );
};

export default Home;
