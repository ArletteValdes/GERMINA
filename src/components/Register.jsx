import React, { useState } from "react";




const Register= () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const [address, setAddress] = useState("");


 const handleSubmit = (e) => {
   e.preventDefault();
   alert("The email address and password are " + email + " and " + password + " respectively.");
 };

 return (


   <div className="registro">
     <form onSubmit={handleSubmit} autocomplete="off">
       <h1>Regístrate aquí</h1>
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
       <div className="formInput">
         <label>Teléfono</label>
         <input
           type="phone"
           name="phone"
           value={phoneNumber}
           placeholder=""
           onChange={(e) => setPhoneNumber(e.target.value)}
         />
       </div >

       <div className="formInput">
         <label>Dirección</label>
         <input
           type="address"
           name="address"
           value={address}
           placeholder=""
           onChange={(e) => setAddress(e.target.value)}
         />
       </div >
       
       <button className="submit">Submit</button>
     </form >
   </div >



   

 );
};


export default Register