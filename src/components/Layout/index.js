import React from "react";
import Container from '@mui/material/Container';


const Layout = ({ children }) =>
    <Container fixed style={{ backgroundColor: '#F0F0F0', minHeight: '100vh', maxHeight: "100%" }}>
        {children}
    </Container>

export default Layout