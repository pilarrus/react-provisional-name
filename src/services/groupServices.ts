import { Group, Groups, PartialUser, User, Users } from "../types/index";
class GroupService {
  private firebase: firebase.app.App;

  constructor(firebase: firebase.app.App) {
    this.firebase = firebase;
  }

  public find(): Promise<Groups> {
    return new Promise(resolve => {
      let data = this.firebase
        .database()
        .ref()
        .child("db/groups");

      data.on("value", snapshot => resolve(snapshot.val()));
    });
  }

  public findUsers(): Promise<Users> {
    return new Promise(resolve => {
      let data = this.firebase
        .database()
        .ref()
        .child("db/users/");

      data.on("value", snapshot => resolve(snapshot.val()));
    });
  }

  /*public findByAdventure(id: string) {
    return new Promise(resolve => {
      let groupsPromise: Promise<Groups> = this.find();

      groupsPromise.then(groups => {
        groups.filter(group => group.id_adventure === id);
        return resolve(groups);
      });
    });
  }*/

  //public findByUser(user: PartialUser) {}

  public save(group: Group, user: PartialUser | User) {
    this.firebase
      .database()
      .ref()
      .child(`db/groups/${group.id}/`)
      .update(group)
      .catch(e => console.log("save>>", e));

    this.saveGroupInUser(group, user);
  }

  public saveGroupInUser(
    group: Group,
    userOwner: PartialUser | User,
    flat?: boolean
  ) {
    let usersPromise: Promise<Users> = this.findUsers();

    usersPromise.then(users => {
      let userFound = users.find(user => user.nick === userOwner.nick);
      if (userFound!.myGroups) {
        let newKey = userFound!.myGroups.length;
        this.firebase
          .database()
          .ref()
          .child(`db/users/${userFound!.id}/myGroups/`)
          .update({ [newKey]: group.name })
          .catch(e => console.log("saveGroupInUser>>", e));
      } else {
        this.firebase
          .database()
          .ref()
          .child(`db/users/${userFound!.id}/`)
          .update({["myGroups"]: {[0]: group.name}})
          .catch(e => console.log("saveGroupInUser>>", e));
      }
    });
    if (flat) {
      this.saveUserInGroup(group, userOwner);
    }
  }

  public saveUserInGroup(group: Group, user: PartialUser | User) {
    let u: PartialUser = { nick: user.nick, img: user.img };
    let groupsPromise: Promise<Groups> = this.find();
    groupsPromise.then(groupPromise => {
      let groupFound = groupPromise.find(g => g.id === group.id);
      let newKey = groupFound!.users.length;
      this.firebase
        .database()
        .ref()
        .child(`db/groups/${group.id}/users`)
        .update({ [newKey]: u })
        .catch(e => console.log("saveUserInGroup>>", e));
    });
  }

  public removeGroupFromUser(group: Group, userOwner: User) {
    let groupsOfUserPromise: Promise<String[]> = new Promise(resolve => {
      this.firebase
        .database()
        .ref()
        .child(`db/users/${userOwner.id}/myGroups/`)
        .on("value", snapshot => resolve(snapshot.val()));
    });

    let indexRemove = groupsOfUserPromise.then(groupsOfUser =>
      groupsOfUser.indexOf(group.name)
    );

    indexRemove.then(index =>
      this.firebase
        .database()
        .ref()
        .child(`db/users/${userOwner.id}/myGroups/${index}`)
        .remove()
        .catch(e => console.log(`No se ha borrado el grupo del usuario: ${e}`))
    );

    this.removeUserFromGroup(group, userOwner);
  }

  public removeUserFromGroup(group: Group, user: User) {
    let groupsPromise: Promise<Groups> = this.find();

    groupsPromise.then(groups => {
      let foundGroup = groups.find(g => g.name === group.name);
      let users = foundGroup!.users;
      console.log("userNick>>", user.nick);
      let indexRemove = users!.findIndex(u => u.nick === user.nick);
      console.log("indexRemove>>", indexRemove);
      this.firebase
        .database()
        .ref()
        .child(`db/groups/${group.id}/users/${indexRemove}`)
        .remove();
    });
  }
}

export default GroupService;
