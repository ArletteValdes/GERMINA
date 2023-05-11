
import Cards from "../components/Cards";
import { useContexto } from "../Context/Contexto";

const Perfil = () => {
  const { fav } = useContexto();

  return (
    <div className="misFav">



      {fav.map((item) => 


        <Cards key={item.id} info={item} fav></Cards>

      
      )}


    </div>
  );
};

export default Perfil;
