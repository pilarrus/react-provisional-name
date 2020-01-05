import React, { Component } from "react";
import Avatar from "./Avatar";
import GetAvatar from "./GetAvatar";

class FinalAvatar extends Component {
  constructor(props) {
    super(props);
    console.log(">>>>>>>>>>>", this.props.user.img);
    this.state = {
      isAvatarDefault: true,
      profile: {
        avatar: props.user.img
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
      <div>
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
