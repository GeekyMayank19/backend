import { makeObservable, observable, action } from "mobx";

export class TestMobxStore {
  message: string = "default";

  constructor() {
    makeObservable(this, {
      message: observable,
      setMessage: action,
    });
  }

  // Update Message State
  public setMessage(message: string): void {
    this.message = message;
  }
}
