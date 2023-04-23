import { createContext } from "react";

export const Contexto= createContext({});

export const ContextoProvider =({props}) =>{

    const lstUsuarios=[
        {
            email: 'plantlover1@gmail.com',
            clave: '12345'
        },
        {
            email: 'plantlover2@gmail.com',
            clave: '67890'
        }
    ];
    return(
        <Contexto.Provider value={{}}>
            {props.children}
        </Contexto.Provider>
    )

}