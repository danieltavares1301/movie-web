import React from "react";
import Box from '@mui/material/Box';
import Header from "../Header";


const Layout = ({ children }) =>
    <Box style={{ backgroundColor: '#F0F0F0', minHeight: '100vh', maxHeight: "100%", minWidth: "100%" }}>
        <Header />
        {children}
    </Box>

export default Layout