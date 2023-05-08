import { createContext, useContext } from "react";
import { useState } from "react";

export const Contexto= createContext();

export const ContextoProvider =({children}) =>{


const [fav, setFav]=useState([])

const addFav = (item) => {
    setFav([...fav, { item }]);
  };


    const lstUsuarios=[
        {
            email: 'plantlover1@gmail.com',
            password: '12345'
        },
        {
            email: 'plantlover2@gmail.com',
            password: '67890'
        }
    ];
    return(
        <Contexto.Provider value={{lstUsuarios,fav,addFav, setFav}}>
            {children}
        </Contexto.Provider>
    )

}


export const useContexto=()=>useContext(Contexto);
