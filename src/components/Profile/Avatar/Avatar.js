import PropTypes from "prop-types";
import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { avatar } = this.props;
    return (
      <div className="profile__info-picture">
        <div
          className="image"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default Profile;
