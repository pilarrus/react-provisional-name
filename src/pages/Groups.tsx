import React from "react";
import fetch from "../utils/mockFetch";
import { Groups } from "../types";
import { RouteComponentProps, withRouter } from "react-router";
import GroupsComponent from "../components/Group/Groups";
import Load from "../components/Reusable/Loading";
import adventures from "../fake-data/adventures";

class GroupContainer extends React.Component<
  RouteComponentProps<{
    activityID?: string;
  }>,
  { fetchGroups: Groups; sortBy: string }
> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      fetchGroups: [],
      sortBy: "alphabetical"
    };
  }

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    fetch<Groups>("/groups")
      .then(response => response.json())
      .then(fetchGroups => {
        if (this._isMounted) {
          this.setState({
            fetchGroups
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setSortBy(x: string) {
    this.setState({ sortBy: x });
  }

  render() {
    let showAll: boolean;
    let groups: Groups = [];

    console.log("sortBy>>", this.state.sortBy);

    if (this.state.fetchGroups.length !== 0) {
      let params = this.props.match.params;

      if (Object.keys(params).length === 0) {
        showAll = true;
        groups = this.state.fetchGroups;
        console.log(groups);
        //Ordeno groups según sortBy
        return (
          <GroupsComponent
            groups={groups}
            showAll={showAll}
            setSortBy={this.setSortBy.bind(this)}
          />
        );
      } else {
        showAll = false;
        let activityID = params.activityID;
        let adventureCopy = adventures.find(
          adventure => adventure.id === activityID
        );
        let nameAdventure = "";
        if (adventureCopy !== undefined) {
          nameAdventure = adventureCopy.name;
        }
        this.state.fetchGroups.forEach(group => {
          if (group.id_adventure === activityID) {
            groups.push(group);
          }
        });
        //Ordeno groups según sortBy
        return (
          <GroupsComponent
            groups={groups}
            showAll={showAll}
            setSortBy={this.setSortBy.bind(this)}
            adventureName={nameAdventure}
          />
        );
      }
    } else {
      return <Load />;
    }
  }
}

export default withRouter(GroupContainer);
