import React from "react";
import fetch from "../utils/mockFetch";
import { Groups, Groups2 } from "../types";
import { RouteComponentProps, withRouter } from "react-router";
import GroupsComponent from "../components/Group/Groups";

class GroupContainer extends React.Component<
  RouteComponentProps<{
    activityID?: string;
  }>,
  { fetchGroups: Groups }
> {
  constructor(props: RouteComponentProps) {
    super(props);
    
    this.state = {
      fetchGroups: {}
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

  render() {
    let showAll: boolean;
    let allGroups: Groups2 = {};

    if (Object.keys(this.state.fetchGroups).length !== 0) {
      let adventuresID = Object.keys(this.state.fetchGroups);
      //console.log(adventuresID);
      //console.log("params",this.params);
      let params = this.props.match.params;
      if (Object.keys(params).length === 0) {
        showAll = true;
        //console.log("showAll>", showAll);
        adventuresID.forEach(adventureID => {
          let adventureName = this.state.fetchGroups[adventureID].adventure;
          //console.log("---", adventureName);
          let groups = this.state.fetchGroups[adventureID].groups;
          //console.log("groups>>>>>", groups);
          (Array.isArray(groups)) && (allGroups[adventureName] = groups);
          /*if (Array.isArray(groups)) {
            allGroups[adventureName] = groups;
          }*/
        });
      } else {
        showAll = false;
        //console.log("showAll>", showAll);
        let activityID = this.props.match.params.activityID;
        //console.log("activity...", activityID);
        let idFound = adventuresID.find(
          adventureID => adventureID === activityID
        );
        //console.log("id-->>>", idFound);
        //@ts-ignore
        let adventureName = this.state.fetchGroups[idFound].adventure;
        //console.log("---", adventureName);
        //@ts-ignore
        let groups = this.state.fetchGroups[idFound].groups;
        //console.log(groups);
        allGroups[adventureName] = groups;
        //this.params = {};
      }
      //console.log("@@@", allGroups);
      return (
        <GroupsComponent groups={allGroups} showAll={showAll} />
      );
    } else {
      return <p>Cargando...</p>;
    }
  }
}

export default withRouter(GroupContainer);
