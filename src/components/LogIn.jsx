import React, { useState } from "react";

import FormLabel from "@mui/material/FormLabel";

import { Password } from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel  from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "The email address and password are " +
        email +
        " and " +
        password +
        " respectively."
    );
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
    </div>
  );
};

export default LogIn;
