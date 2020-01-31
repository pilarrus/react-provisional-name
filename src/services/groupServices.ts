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
          console.log("Error: No se ha guardado el grupo");
        } else {
          console.log("El grupo se ha guardado");
          this.saveGroupInUser(group, user);
        }
      });
  }

  public saveGroupInUser(group: Group, userOwner: User, flat?: boolean) {
    let newKey = userOwner.myGroups ? userOwner.myGroups.length : 0;
    this.firebase
      .database()
      .ref(`db/users/${userOwner.id}/myGroups`)
      .update({ [newKey]: group.name }, e => {
        if (e) {
          console.log("Error: No se ha guardado el grupo en el usuario", e);
        } else {
          console.log("Se ha guardado correctamente el grupo en el usuario");
          if (flat) {
            this.saveUserInGroup(group, userOwner);
          }
        }
      });
  }

  public saveUserInGroup(group: Group, user: PartialUser | User) {
    let u: PartialUser = { nick: user.nick, img: user.img };
    let newKey = group.users ? group!.users.length : 0;
    this.firebase
      .database()
      .ref(`db/groups/${group.id}/users`)
      .update({ [newKey]: u }, e => {
        if (e) {
          console.log("Error: No se ha guardado el usuario en el grupo>>", e);
        } else {
          console.log("Se ha guardado correctamente el usuario en el grupo");
        }
      });
  }

  public removeGroupFromUser(group: Group, userOwner: User) {
    let index = userOwner.myGroups.indexOf(group.name);
    this.firebase
      .database()
      .ref(`db/users/${userOwner.id}/myGroups/${index}`)
      .remove(e => {
        if (e) {
          console.log("No se ha eliminado el grupo del usuario");
        } else {
          console.log("Se ha eliminado el grupo del usuario");
          this.removeUserFromGroup(group, userOwner);
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
