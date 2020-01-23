import { Groups, Group, PartialUser, Users, User } from '../types/index';
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
        .child("db")
        .child("groups");

      data.on("value", snapshot => resolve(snapshot.val()));
    });
  }

  public findUsers(): Promise<Users> {
    return new Promise(resolve => {
      let data = this.firebase
        .database()
        .ref()
        .child("db")
        .child("users");

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

  public save(group: Group, userOwner: PartialUser | User) {
    this.firebase
      .database()
      .ref()
      .child("db")
      .child("groups")
      .child(`${group.id}/`)
      .update(group);

    this.saveGroupInUser(group, userOwner);
  }


  public saveGroupInUser(group: Group, userOwner: PartialUser | User) {
      let usersPromise: Promise<Users> = this.findUsers();

      usersPromise.then(users => {
        let userFound = users.find(user => user.nick === userOwner.nick);
        let newKey = userFound!.myGroups.length;
        this.firebase.database().ref().child("db").child("users").child(`${userFound!.id}/myGroups/`).update({[newKey]: group.name});
      });
      this.saveUserInGroup(group, userOwner);
  }

  public saveUserInGroup(group: Group, user: PartialUser | User) {
    let u: PartialUser = {nick: user.nick, img: user.img};
    let groupsPromise: Promise<Groups> = this.find();
    groupsPromise.then(groupPromise => {
      let groupFound = groupPromise.find(g => g.id === group.id);
      let newKey = groupFound!.users.length;
      this.firebase
      .database()
      .ref()
      .child("db")
      .child("groups")
      .child(`${group.id}/users`).update({[newKey]: u});
    });
  }

  //public removeFromUser(group: Group, userOwner: User) {}
}

export default GroupService;
