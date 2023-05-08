import { createContext } from "react";
import { useState } from "react";

export const Contexto= createContext({});

export const ContextoProvider =(props) =>{


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
        <Contexto.Provider value={{lstUsuarios,fav,addFav}}>
            {props.children}
        </Contexto.Provider>
    )

}


export default Contexto
