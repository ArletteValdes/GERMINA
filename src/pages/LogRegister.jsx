import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Promotion from "../components/Promotion";

const LogRegister = () => {
  return (
    <div className="logRegister">
      <Promotion />
      <LogIn />
      <Register />
    </div>
  );
};

export default LogRegister;
