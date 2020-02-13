import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import GroupsComponent from "../components/Group/Groups";
import Load from "../components/Reusable/Loading";
import GroupsContext from "../contexts/GroupsContext";
import fire from "../enviroments/enviroment";
import adventures from "../fake-data/adventures";
import Error from "../pages/Error";
import { Groups } from "../types";
import { sortGroups } from "../utils/functions";

class GroupContainer extends React.Component<
  RouteComponentProps<{
    activityID?: string;
  }>,
  { fetchGroups: Groups; sortBy: string; data: firebase.database.Reference }
> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      fetchGroups: [],
      sortBy: "alphabetical",
      data: fire.database().ref("db/groups")
    };

    this.cbk = this.cbk.bind(this);
  }

  static contextType = GroupsContext; // Crea la variable mágica this.context

  componentDidMount() {
    this.state.data.on("value", this.cbk);
  }

  componentWillUnmount() {
    this.state.data.off("value", this.cbk);
  }

  handleGroups(groups: Groups) {
    this.setState({
      fetchGroups: groups
    });
    //console.log("this.context>>>", this.context);
    this.context.setGroups(groups); // this.context es una variable mágica
    //console.log("context.groups>>>",this.context.groups);
  }

  setSortBy(x: string) {
    this.setState({ sortBy: x });
  }

  cbk(snapshot: firebase.database.DataSnapshot) {
    this.handleGroups(snapshot.val());
  }

  render() {
    let showAll: boolean;
    let groups: Groups = [];

    if (this.state.fetchGroups.length !== 0) {
      let params = this.props.match.params;

      if (Object.keys(params).length === 0) {
        showAll = true;
        groups = this.state.fetchGroups;

        groups = sortGroups(this.state.sortBy, groups);
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

        if (
          parseInt(activityID as string) < 0 ||
          parseInt(activityID as string) > 9
        )
          return <Error />;

        let adventureCopy = adventures.find(
          adventure => adventure.id === activityID
        );
        let nameAdventure = adventureCopy!.name;

        this.state.fetchGroups.forEach(group => {
          if (group.id_adventure === activityID) {
            groups.push(group);
          }
        });

        groups = sortGroups(this.state.sortBy, groups);
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
