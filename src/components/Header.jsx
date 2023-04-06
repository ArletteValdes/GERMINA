import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MenuLogIn from "./MenuLogIn";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <p className="logo">Germina</p>
      <div className="info">
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <div className="form-group">
            <input type="text " className="input" placeholder="..." />
          </div>
        </div>

        <div className="weather">
          <FontAwesomeIcon icon={faCloudSun} />
          <h4>24°C</h4>
        </div>
      </div>

     
      <div className="botones">
      <div className="name">Hola!</div>

        <MenuLogIn/> 
      <IconButton size="small">
        <FontAwesomeIcon icon={faHeart} />
        </IconButton>
        <IconButton size="small">
        <FontAwesomeIcon icon={faCartShopping} />
        </IconButton>
      </div>
   
    </div>
  );
};

export default Header;
