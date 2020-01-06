import React, { useContext } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
import UserContext from "../../contexts/UserContext";

const Logout: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const contextLog = useContext(LoginContext);
  const contextUser = useContext(UserContext);
  const user = contextUser.user;
  //const [profile, setProfile] = useState(false);
  console.log("^^^^^ LOGOUTContext", user);
  console.log("PPPPP LOGOUT PROPS", props);

  // console.log(profile);

  const sendToProfile = () => {
    props.history.push("/profile", user);
  }; // NO FUNCIONA ¿ POR QUEEEEEEEEEEEEEEEEEEEEEEEEEEE ?!!!
  return (
    <>
      <i className="fa fa-user"></i>
      <span onClick={sendToProfile}>Mi perfil</span>
      <div className="options">
        <button onClick={sendToProfile}>Mi perfil</button>
        <button onClick={() => contextLog.setLog(false)}>Logout</button>
      </div>
    </>
  );
};

export default withRouter(Logout);
