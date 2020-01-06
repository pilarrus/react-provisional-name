import PropTypes from "prop-types";
import React, { Component } from "react";
import icon from "../../../images/profile/anadir-imagen.svg";

class GetAvatar extends Component {
  constructor(props) {
    super(props);

    //console.log(props);
    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener("load", this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    const styleIcon = {
      width: "50px",
      height: "50px",
      cursor: "pointer"
    };
    const styleInput = {
      display: "none"
    };
    const { isAvatarDefault, avatar } = this.props;
    return (
      <div className="middle">
        <label htmlFor="file">
          <img src={icon} alt="icon" style={styleIcon} />
        </label>
        <input
          type="file"
          ref={this.myFileField}
          className="get-avatar__upload-field"
          onChange={this.uploadImage}
          id="file"
          style={styleInput}
        />

        <div
          className="get-avatar__preview"
          style={this.getPreview(isAvatarDefault, avatar)}
        ></div>
      </div>
    );
  }
}

GetAvatar.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired
};

export default GetAvatar;
