import React, { Component } from "react";
import FormatDate from "../Reusable/FormatDate";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import { TypeGroup } from "../../types";
import GroupModal from "./GroupModal";

type PropsGroup = {
  group: TypeGroup;
};

const groupStyle = {
  //height: "200px",
  border: "1px solid black",
  borderRadius: "5px"
};

export default class Group extends Component<PropsGroup> {
  state = {
    isOpen: false
  };

  handleState = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { group } = this.props;
    return (
      <>
        {this.state.isOpen && (
          <GroupModal group={group} changeState={this.handleState} />
        )}
        <div className="group" style={groupStyle}>
          <h3>{group.name}</h3>
          <p>{group.place}</p>
          <FormatDate timestamp={group.timestamp} />
          <p>
            Nº de usuarios: {group.users.length} de {group.sizeGroup}
          </p>
          <ButtonRainbow text="VER" changeState={this.handleState} />
        </div>
      </>
    );
  }
}
