import { Groups } from "../types/index";
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

      data.on("value", snapshot => {
        return resolve(snapshot.val());
      });
    });
  }

  public findByAdventure(id: string) {
    return new Promise(resolve => {
      let groupsPromise: Promise<Groups> = this.find();

      groupsPromise.then(groups => {
        groups.filter(group => group.id_adventure === id);
        return resolve(groups);
      });
    });
  }
  /*
  public findByUser(user: PartialUser) {}

  public save(group: Group) {}

  public save2(group: Group, userOwner: PartialUser) {}

  public removeFromUser(group: Group, userOwner: User) {}*/
}

export default GroupService;
