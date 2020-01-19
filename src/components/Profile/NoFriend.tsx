import React from "react";
import firebase from "../../enviroments/enviroment";
import send from "../../images/profile/mail.svg";
import icon from "../../images/profile/user.svg";
import { User, Users } from "../../types";

class NoFriend extends React.Component<{ friend: User; conectUser: User }> {
  state = {
    add: icon,
    fireDataUsers: {} as Users,
    charge: false
  };

  dbRef = firebase.database().ref("users");

  componentDidMount() {
    const data = firebase
      .database()
      .ref()
      .child("users");

    data.on("value", snapshot => {
      this.setState({ fireDataUsers: snapshot.val() });
    });
  }
  sendRequest = (friend: User, users: Users) => {
    const conectUser = this.props.conectUser;
    console.log(users);
    //  const request = users.find(user => user.id === friend.id);

    /*  if (request) {
      const values = Object.values(request.request);
      console.log("Values", values);
      console.log("conect user", conectUser);

      values.forEach(e => {
        console.log(e);
      });
    }*/
    this.setState({ add: send });
    this.dbRef.child(`${friend.id}/request`).push(conectUser.nick);
  };
  render() {
    // console.log(this.state.fireDataUsers);
    return (
      <div className="friends_img">
        <img src={this.props.friend.img} alt="friend" className="image" />
        <div className="middle">
          <span className="nofriends-name">{this.props.friend.name}</span>
          <span>
            <div className="icon__nofriends">
              <img
                src={this.state.add}
                alt="icon"
                className="icon"
                onClick={() =>
                  this.sendRequest(this.props.friend, this.state.fireDataUsers)
                }
              />
            </div>
          </span>
        </div>
      </div>
    );
  }
}
export default NoFriend;
