import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import PermanentDrawerLeft from "../Drawer";

const Layout = () => (
  <Box sx={{ display: "flex" }}>
    <Header />
    <PermanentDrawerLeft />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Outlet />
    </Box>
  </Box>
);

export default Layout;
