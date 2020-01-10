import React, { Component } from "react";
import { TypeGroup } from "../../types";
import GroupModal from "./GroupModal";
import TitleSmall from "../Reusable/TitleSmall";
import ButtonPlus from "../Reusable/ButtonPlus";

type PropsGroup = {
  group: TypeGroup;
  adventureName: string;
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
    const { adventureName } = this.props;
    
    return (
      <>
        {this.state.isOpen && (
          <GroupModal group={group} changeState={this.handleState} />
        )}
        <div
          className="group"
          style={{ backgroundImage: "url(" + group.bg + ")" }}
        >
          <div className="group__container">
            <TitleSmall title={group.name}></TitleSmall>
            <span>{adventureName}</span>
          </div>
          <ButtonPlus changeState={this.handleState} />
        </div>
      </>
    );
  }
}
