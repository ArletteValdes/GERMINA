import HeroSection from "../components/HeroSection";
import Filter from "../components/Filter";
import Galeria from "../components/Galeria";


import Proveedores from "../components/Proveedores";


const Home = () => {


  return (
    <>
      <div className="catalogo">
        <HeroSection />
        <Filter />
        <Galeria/>
        <Proveedores />
      </div>
    </>
  );
};

export default Home;
