import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import PermanentDrawerLeft from "../Drawer";

const Layout = () => (
  <Box
    sx={{ display: "flex" }}
    style={{
      backgroundColor: "#F0F0F0",
      minHeight: "100vh",
      maxHeight: "100%",
      minWidth: "100%",
    }}
  >
    <Header />
    <PermanentDrawerLeft />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Outlet />
    </Box>
  </Box>
);

export default Layout;
