import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogRegister from "./pages/LogRegister";
import {  Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { ContextoProvider } from "./Context/Contexto";
import Perfil from "./pages/Perfil";

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
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="*/" element={<NotFound />} />
        </Routes>
        <Footer />
      </ContextoProvider>
    </>
  );
}

export default App;
