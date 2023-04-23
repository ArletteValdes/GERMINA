import * as React from "react";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";


export default function MenuLogIn() {

  return (
    <div>
      <Link to="/LogReg">
        <AccountCircleOutlinedIcon color="secondary" width="10px" />
      </Link>
    </div>
  );
}
