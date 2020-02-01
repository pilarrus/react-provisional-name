import { Group, PartialUser, User } from "../types/index";
class GroupService {
  private firebase: firebase.app.App;

  constructor(firebase: firebase.app.App) {
    this.firebase = firebase;
  }

  public save(group: Group, user: User) {
    this.firebase
      .database()
      .ref(`db/groups/${group.id}`)
      .update(group, e => {
        if (e) {
          console.log("Error: Grupo NO guardado");
        } else {
          console.log("Grupo guardado");
          this.saveGroupInUser(group, user);
        }
      });
  }

  public saveGroupInUser(group: Group, user: User, flat?: boolean) {
    let newKey = user.myGroups ? user.myGroups.length : 0;
    console.log("newKeyGroup>>>", newKey);
    this.firebase
      .database()
      .ref(`db/users/${user.id}/myGroups`)
      .update({ [newKey]: group.name }, e => {
        if (e) {
          console.log("Error: Grupo NO guardado en usuario");
        } else {
          console.log("Grupo guardado en usuario");
          if (flat) {
            this.saveUserInGroup(group, user);
          }
        }
      });
  }

  public saveUserInGroup(group: Group, user: PartialUser | User) {
    let u: PartialUser = { nick: user.nick, img: user.img };
    let newKey = group.users ? group.users.length : 0;
    console.log("newKeyUser>>>", newKey);
    this.firebase
      .database()
      .ref(`db/groups/${group.id}/users`)
      .update({ [newKey]: u }, e => {
        if (e) {
          console.log("Error: No se ha guardado el usuario en el grupo>>");
        } else {
          console.log("Se ha guardado correctamente el usuario en el grupo");
        }
      });
  }

  public removeGroupFromUser(group: Group, user: User) {
    let index = user.myGroups.indexOf(group.name);
    this.firebase
      .database()
      .ref(`db/users/${user.id}/myGroups/${index}`)
      .remove(e => {
        if (e) {
          console.log("No se ha eliminado el grupo del usuario");
        } else {
          console.log("Se ha eliminado el grupo del usuario");
          this.removeUserFromGroup(group, user);
        }
      });
  }

  public removeUserFromGroup(group: Group, user: User) {
    let index = group.users.findIndex(u => u.nick === user.nick);
    this.firebase
      .database()
      .ref(`db/groups/${group.id}/users/${index}`)
      .remove(e => {
        if (e) {
          console.log("No se ha eliminado el usuario del grupo");
        } else {
          console.log("Se ha eliminado el usuario del grupo");
        }
      });
  }
}

export default GroupService;
