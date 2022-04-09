import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Box from "@mui/material/Box";
//import Button from "@mui/material/Button";
//import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";
//import { SwipeableDrawer, Drawer } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      style={{ backgroundColor: "#fff" }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Movie
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
