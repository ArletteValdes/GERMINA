import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogRegister from "./pages/LogRegister";
import Favorites from "./pages/Favorites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { ContextoProvider} from "./Context/Contexto";




// //Data json
// const [Plants, setPlants] = useState([]);

// const getPlants = async () => {
//   const res = await fetch("plants.json");
//   const data = await res.json();
//   setPlants(data.plantas);
// };

// useEffect(() => {
//   getPlants();
// }, []);


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
