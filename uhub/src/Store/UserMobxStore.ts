import { makeObservable, observable } from "mobx";

export class UserMobxStore {
  firstName: string = "Surinder";
  lastName: string = "Singh";

  constructor() {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
    });
  }
}
