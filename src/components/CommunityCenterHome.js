import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import BoilerRoom from "./BoilerRoom";
import Bulletin from "./Bulletin";
import Craft from "./CraftRoom";
import FishTank from "./FishTank";
import Pantry from "./Pantry";
import Vault from "./Vault";
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
            {/* pull in all bundles*/}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#EFEEFC",
              width: "70%",
              margin: "auto",
              mt: "30px",
              fontSize: "30px",
              textAlign: "center",
            }}>
            <TabPanel value="1">
              Welcome to the Community Center Guide!
              <Typography sx={{ fontSize: "20px" }}>
                There are some additional cases you should know about when
                completing the Community Center!
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                In the Exotic Foraging Bundle, you only need 5 items to complete
                it.
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                In the Quality Crops Bundle, you only need 3 of the crops to
                complete it.
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                In the Animal Bundle, you only need 5 animal products to
                complete it.
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                In the Artisan Bundle, you only need 6 items to complete it.
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                In the Crab Pot Bundle, you only need 5 items to complete it.
                Did you know you can complete the bundle without ever using a
                Crab Pot? You can forage 4 of the fish, and then you can get a
                crab in the mines!
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                In the Adventurer's Bundle, you only need 2 items to complete
                it.
              </Typography>
            </TabPanel>
          </Box>
          <TabPanel value="2">
            <BoilerRoom />
          </TabPanel>
          <TabPanel value="3">
            <Bulletin />
          </TabPanel>
          <TabPanel value="4">
            <Pantry />
          </TabPanel>
          <TabPanel value="5">
            <Craft />
          </TabPanel>
          <TabPanel value="6">
            <FishTank />
          </TabPanel>
          <TabPanel value="7">
            <Vault />
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};

export default CommunityCenter;
