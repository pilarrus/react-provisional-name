import React, { useContext } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
import UserContext from "../../contexts/UserContext";
import { User } from "../../types";

const Logout: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const contextLog = useContext(LoginContext);
  const contextUser = useContext(UserContext);
  const user = contextUser.user;
  const style = {
    color: "black",
    padding: 0
  };
  const sendToProfile = () => {
    props.history.push("/profile", user);
  };
  return (
    <>
      <i className="fa fa-user"></i>
      <span onClick={sendToProfile}>Mi perfil</span>
      <div className="options">
        <button onClick={sendToProfile}>Mi perfil</button>
        <button>
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
        </button>
      </div>
    </>
  );
};

export default withRouter(Logout);
