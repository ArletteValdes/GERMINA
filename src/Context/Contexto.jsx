import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  const [Plants, setPlants] = useState([]);

  const getPlants = async () => {
    const res = await fetch("plants.json");
    const data = await res.json();
    setPlants(data.plantas);
  };

  useEffect(() => {
    getPlants();
  }, []);

  const [fav, setFav] = useState([]);

  const addFav = (info) => {
    setFav([...fav,  info ]);
  };

const removeFav=(id)=>{
setFav(fav.filter((item)=>item.id!=id))


}


  const lstUsuarios = [
    {
      email: "plantlover1@gmail.com",
      password: "12345",
    },
    {
      email: "plantlover2@gmail.com",
      password: "67890",
    },
  ];
  return (
    <Contexto.Provider value={{ lstUsuarios, fav, addFav, setFav, Plants,removeFav}}>
      {children}
    </Contexto.Provider>
  );
};

export const useContexto = () => useContext(Contexto);
