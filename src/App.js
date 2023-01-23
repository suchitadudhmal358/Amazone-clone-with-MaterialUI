import React from "react";
import "./App.css";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Home from "./Screens/Home";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Header />
      <Sidebar />
      <Home />
    </Box>
  );
}

export default App;
