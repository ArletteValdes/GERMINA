import { createContext } from "react";

export const Contexto= createContext({});

export const ContextoProvider =(props) =>{

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
        <Contexto.Provider value={{lstUsuarios}}>
            {props.children}
        </Contexto.Provider>
    )

}


export default Contexto
