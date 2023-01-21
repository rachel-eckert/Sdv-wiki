import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllCharacters from "./components/AllCharacters";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import SingleCharacter from "./components/SingleCharacter";
const theme = createTheme({
  typography: {
    fontFamily: "Courier",
  },
});

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<AllCharacters />} />
            <Route path="/characters/:id" element={<SingleCharacter />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default Main;
