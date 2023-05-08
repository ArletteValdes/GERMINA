import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogRegister from "./pages/LogRegister";
import Favorites from "./pages/Favorites";
import {  Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { ContextoProvider } from "./Context/Contexto";


function App() {




  return (
    <>
      <ContextoProvider>
        <CssBaseline />
        <Header />
        {/* Componente Rutas para diferentes páginas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogReg" element={<LogRegister />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="*/" element={<NotFound />} />
        </Routes>
        <Footer />
      </ContextoProvider>
    </>
  );
}

export default App;
