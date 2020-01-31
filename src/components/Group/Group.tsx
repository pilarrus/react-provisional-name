import React, { Component } from "react";
import { Group } from "../../types";
import ButtonPlus from "../Reusable/ButtonPlus";
import TitleSmall from "../Reusable/TitleSmall";
import GroupModal from "./GroupModal";

type GroupProps = {
  group: Group;
};

export default class GroupComponent extends Component<GroupProps> {
  state = {
    viewMore: false
  };

  handleViewMore = () => {
    this.setState({ viewMore: !this.state.viewMore });
  };

  render() {
    const { group } = this.props;

    return (
      <>
        {this.state.viewMore && (
          <GroupModal group={group} viewMore={this.handleViewMore} />
        )}
        <div
          className="group"
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/react-9cbc4.appspot.com/o/" +
              group.bg +
              ")"
          }}
        >
          <div className="group__container">
            <TitleSmall title={group.name}></TitleSmall>
            <span>{group.name_adventure}</span>
          </div>
          <ButtonPlus viewMore={this.handleViewMore} />
        </div>
      </>
    );
  }
}
