import React from "react";
import firebase from "../../enviroments/enviroment";
import send from "../../images/profile/mail.svg";
import nosend from "../../images/profile/no.svg";
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
    var key;
    var exist = false;

    if (users[friend.id].request) {
      key = users[friend.id].request.length;

      users[friend.id].request.forEach(e => {
        if (e === conectUser.nick) {
          exist = true;
        }
      });
    } else {
      key = 0;
    }

    if (!exist) {
      this.setState({ add: send });
      this.dbRef
        .child(`${friend.id}/request`)
        .update({ [key]: conectUser.nick });
    } else {
      this.setState({ add: nosend });
    }
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
