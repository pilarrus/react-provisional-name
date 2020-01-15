import React from "react";
import fetch from "../utils/mockFetch";
import { Groups3, Groups2 } from "../types";
import { RouteComponentProps, withRouter } from "react-router";
import GroupsComponent from "../components/Group/Groups";
import Load from "../components/Reusable/Loading";

class GroupContainer extends React.Component<
  RouteComponentProps<{
    activityID?: string;
  }>,
  { fetchGroups: Groups3; sortBy: string }
> {
  constructor(props: RouteComponentProps) {
    super(props);
    
    this.state = {
      fetchGroups: {},
      sortBy: "alphabetical"
    };
  }

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    fetch<Groups3>("/groups")
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
    this.setState({sortBy: x});
  }

  render() {
    let showAll: boolean;
    let allGroups: Groups2 = {};

    console.log("sortBy>>",this.state.sortBy);

    if (Object.keys(this.state.fetchGroups).length !== 0) {
      let adventuresID = Object.keys(this.state.fetchGroups);
      let params = this.props.match.params;

      if (Object.keys(params).length === 0) {
        showAll = true;
        adventuresID.forEach(adventureID => {
          let adventureName = this.state.fetchGroups[adventureID].adventure;
          let groups = this.state.fetchGroups[adventureID].groups;
          (Array.isArray(groups)) && (allGroups[adventureName] = groups);
        });

      } else {
        showAll = false;
        let activityID = this.props.match.params.activityID;
        let idFound = adventuresID.find(
          adventureID => adventureID === activityID
        );
        //@ts-ignore
        let adventureName = this.state.fetchGroups[idFound].adventure;
        //@ts-ignore
        let groups = this.state.fetchGroups[idFound].groups;
        allGroups[adventureName] = groups;
      }
      // Aquí ordeno allGroups si es un array!! Si es un string no hago nada
      // Aqui this.setAllGroups(allGroups);
      return (
        <GroupsComponent groups={allGroups} showAll={showAll} setSortBy={this.setSortBy.bind(this)} />
      );
      
    } else {
      return <Load/>;
    }
  }
}

export default withRouter(GroupContainer);
