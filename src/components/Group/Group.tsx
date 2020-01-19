import React, { Component } from "react";
import { Group } from "../../types";
import GroupModal from "./GroupModal";
import TitleSmall from "../Reusable/TitleSmall";
import ButtonPlus from "../Reusable/ButtonPlus";

type GroupProps = {
  group: Group;
};

export default class GroupComponent extends Component<GroupProps> {
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
        <div
          className="group"
          style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/react-9cbc4.appspot.com/o/" + group.bg + ")" }}
        >
          <div className="group__container">
            <TitleSmall title={group.name} semiTransparent={false}></TitleSmall>
            <span>{group.name_adventure}</span>
          </div>
          <ButtonPlus changeState={this.handleState} />
        </div>
      </>
    );
  }
}
