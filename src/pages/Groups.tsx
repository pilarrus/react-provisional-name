import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import GroupsComponent from "../components/Group/Groups";
import Load from "../components/Reusable/Loading";
import fire from "../enviroments/enviroment";
import adventures from "../fake-data/adventures";
import GroupService from "../services/groupServices";
import { Groups } from "../types";
import { sortGroups } from "../utils/functions";
import Error from "../pages/Error";

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

    let groupService: GroupService;
    groupService = new GroupService(fire);

    groupService.find().then(fetchGroups => {
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
        //console.log("activityID>>>>>>>>", activityID);
        if (parseInt(activityID as string) < 0 || parseInt(activityID as string) > 9) return <Error/>;

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
