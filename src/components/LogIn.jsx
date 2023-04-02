import React, { useState } from "react";




const LogIn= () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const handleSubmit = (e) => {
   e.preventDefault();
   alert("The email address and password are " + email + " and " + password + " respectively.");
 };

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
       <button className="submit">Submit</button>
     </form >
   </div >



   

 );
};


export default LogIn