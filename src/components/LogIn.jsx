import React, { useState } from "react";
import { Contexto } from "../Context/Contexto";


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Bienvenido"
    );
  };

const {lstUsuarios}= useContext(Contexto)

  const validarUsuario=()=>{
   const lstUsuarios.find((usuario)=>usuario.email === email && usuario.password ===password );

   if (usuarioValido){
    alert('usuario válido');
   }
   else{
    alert ('usuario inválido')
   }

  }

  return (
    <div className="logIn">
     
     <form onSubmit={handleSubmit} autocomplete="off">
       <h1>Bienvenido Amante de las plantas</h1>
       <div className="formInput">
         <label>Email</label>
         <input
           type="email"
           name="email"
           value={email}
           placeholder=""
           onChange={(e) => setEmail(e.target.value)}
         />
       </div>
       <div className="formInput">
         <label>Password</label>
         <input
           type="password"
           name="password"
           value={password}
           placeholder=""
           onChange={(e) => setPassword(e.target.value)}
         />
       </div >
       <button onClick={()=> validarUsuario()}>Entrar</button>
     </form >
    </div>
  );
};

export default LogIn;
