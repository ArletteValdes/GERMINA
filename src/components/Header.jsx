import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
   
    </div>
  );
};

export default Header;
