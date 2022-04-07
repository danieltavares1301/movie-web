import React from "react";
import Box from "@mui/material/Box";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <Box
    style={{
      backgroundColor: "#F0F0F0",
      minHeight: "100vh",
      maxHeight: "100%",
      minWidth: "100%",
    }}
  >
    <Header />
    <Outlet />
  </Box>
);

export default Layout;
