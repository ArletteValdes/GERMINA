import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import "./index.css";


const theme = createTheme({

  
  palette: {
    primary: {
      main: "#e0e0e0",
    },

    secondary: {
      main: "#2e7d32",
    },
  },

  typography: {
    "fontFamily": `"Elsie", "Montserrat",sans-serif,cursive`,
    "fontSize": 14,
    "fontWeightLight": 200,
    "fontWeightRegular": 300,
    "fontWeightMedium": 400
   },

});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
