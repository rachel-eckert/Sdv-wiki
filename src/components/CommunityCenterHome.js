import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import BoilerRoom from "./BoilerRoom";
import Bulletin from "./Bulletin";
import Craft from "./CraftRoom";
import FishTank from "./FishTank";
const theme = createTheme({
  typography: {
    fontFamily: "courier",
  },
  palette: {
    primary: {
      main: "#151152",
    },
    secondary: {
      main: "#151152",
    },
  },
});

const CommunityCenter = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", typography: "20px" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary">
              <Tab sx={{ fontSize: "25px" }} label="About" value="1" />
              <Tab sx={{ fontSize: "25px" }} label="Boiler Room" value="2" />
              <Tab sx={{ fontSize: "25px" }} label="Bulletin Board" value="3" />
              <Tab sx={{ fontSize: "25px" }} label="Pantry" value="4" />
              <Tab sx={{ fontSize: "25px" }} label="Craft Room" value="5" />
              <Tab sx={{ fontSize: "25px" }} label="Fish Tank" value="6" />
              <Tab sx={{ fontSize: "25px" }} label="Vault" value="7" />
            </TabList>
          </Box>
          <TabPanel value="1">Welcome to the Community Center Guide!</TabPanel>
          <TabPanel value="2">
            <BoilerRoom />
          </TabPanel>
          <TabPanel value="3">
            <Bulletin />
          </TabPanel>
          <TabPanel value="4"></TabPanel>
          <TabPanel value="5">
            <Craft />
          </TabPanel>
          <TabPanel value="6">
            <FishTank />
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};

export default CommunityCenter;
