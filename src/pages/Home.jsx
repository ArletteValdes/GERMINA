import HeroSection from "../components/HeroSection";
import Filter from "../components/Filter";
import Cards from "../components/Cards";
import Proveedores from "../components/Proveedores";

const Home = () => {
  return (
    <>
      <div className="catalogo">
        <HeroSection />
        <Filter />
        <Cards />
        <Proveedores />
      </div>
    </>
  );
};

export default Home;
