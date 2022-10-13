import { TestMobxStore } from "./TestMobxStore";
import { UserMobxStore } from "./UserMobxStore";

class RootStore {
  testMobxStore: TestMobxStore;
  userMobxStore: UserMobxStore;

  constructor() {
    this.testMobxStore = new TestMobxStore();
    this.userMobxStore = new UserMobxStore();
  }
}

const rootStore = new RootStore();
export default rootStore;
