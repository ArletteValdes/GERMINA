import HeroSection from "../components/HeroSection";
import Filter from "../components/Filter";

import Proveedores from "../components/Proveedores";
import { useEffect, useState } from "react";

const Home = () => {

  
//Data json
const [Plants, setPlants] = useState([]);

const getPlants = async () => {
  const res = await fetch("plants.json");
  const data = await res.json();
  setPlants(data.plantas);
};

useEffect(() => {
  getPlants();
}, []);


  return (
    <>
      <div className="catalogo">
        <HeroSection />
        <Filter Plants={Plants}/>
        {/* <Cards Plants={Plants}/> */}
        <Proveedores />
      </div>
    </>
  );
};

export default Home;
