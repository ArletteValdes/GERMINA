import * as React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function MenuCart() {
    return (
        <div>
          <Link to="/Cart">
            <ShoppingCartOutlined color="secondary" width="10px" />
          </Link>
        </div>
      );
    }
    