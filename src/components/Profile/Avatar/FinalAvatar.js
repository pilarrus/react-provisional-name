import React, { Component } from "react";
import noimage from "../../../images/profile/noimage.png";
import Avatar from "./Avatar";
import GetAvatar from "./GetAvatar";

class FinalAvatar extends Component {
  constructor(props) {
    super(props);
    console.log(">>>>>>>>>>>IMAGEEEEEEEEEEEEN", this.props.user.img);

    const img = props.user.img === undefined ? noimage : props.user.img;
    this.state = {
      isAvatarDefault: true,
      profile: {
        avatar: img
      }
    };
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  updateAvatar(img) {
    const { profile } = this.state;
    this.setState(prevState => {
      const newProfile = { ...profile, avatar: img };
      return {
        profile: newProfile,
        isAvatarDefault: false
      };
    });
  }

  render() {
    const { profile, isAvatarDefault } = this.state;
    return (
      <div className="getavatar">
        <GetAvatar
          avatar={profile.avatar}
          isAvatarDefault={isAvatarDefault}
          updateAvatar={this.updateAvatar}
        />

        <Avatar avatar={profile.avatar} />
      </div>
    );
  }
}

export default FinalAvatar;
