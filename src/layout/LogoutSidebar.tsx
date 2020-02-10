import React, { useContext } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import LoginContext from "../contexts/LoginContext";
import UserContext from "../contexts/UserContext";
import { User } from "../types";

const LogoutSide: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const contextLog = useContext(LoginContext);
  const contextUser = useContext(UserContext);
  const user = contextUser.user;
  const style = {
    color: "white",
    padding: 0
  };
  const sendToProfile = () => {
    props.history.push("/profile", user);
  };
  return (
    <>
      <div className="options">
        <li onClick={sendToProfile} className="logoutbutton">
          Mi perfil
        </li>

        <li className="logoutbutton">
          <Link
            to="/login"
            style={style}
            onClick={() => {
              contextLog.setLog(false);
              contextUser.setUser({} as User);
            }}
          >
            Logout
          </Link>
        </li>
      </div>
    </>
  );
};

export default withRouter(LogoutSide);
