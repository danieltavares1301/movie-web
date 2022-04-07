import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: "#F0F0F0",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: "#C70000",
        },
        background: {
            default: "#fff",
        },
        button: {
            main: "#c6ff00",
        },
        link: {
            main: "black",
        },
    },
});

export default theme;