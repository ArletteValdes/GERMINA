import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import LogRegister from "./pages/LogRegister";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Home/>
      {/* <LogRegister /> */}
      {/* <Menu /> */}
      <Footer />
    </>
  );
}

export default App;
