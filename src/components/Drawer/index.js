import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
//import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const PermanentDrawerLeft = () => (
  <Box sx={{ display: "flex" }}>
    <Drawer
      sx={{
        width: drawerWidth,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        <ListItem button key={1}>
          {/*<ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>*/}
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key={2}>
          <ListItemText primary="Movie" />
        </ListItem>
        <ListItem button key={3}>
          <ListItemText primary="Session" />
        </ListItem>
        <ListItem button key={4}>
          <ListItemText primary="User" />
        </ListItem>
      </List>
    </Drawer>
  </Box>
);

export default PermanentDrawerLeft;
