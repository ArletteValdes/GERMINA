import HeroSection from "../components/HeroSection";
import Filter from "../components/Filter";

import Proveedores from "../components/Proveedores";
import { useEffect, useState } from "react";
import { Contexto, useContexto } from "../Context/Contexto";

const Home = () => {
  const { Plants } = useContexto();

  return (
    <>
      <div className="catalogo">
        <HeroSection />
        <Filter Plants={Plants} />
        {/* <Cards Plants={Plants}/> */}
        <Proveedores />
      </div>
    </>
  );
};

export default Home;
