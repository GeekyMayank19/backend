import { inject, observer } from "mobx-react";
import { FC } from "react";
import { TestMobxStore } from "../../Store";
import ComponentB from "./ComponentB";

type Props = {
  testMobxStore?: TestMobxStore;
};

const ComponentA: FC<Props> = ({ testMobxStore }) => {
  return (
    <div>
      Message From A : {testMobxStore?.message}
      <ComponentB />
      <button onClick={() => testMobxStore?.setMessage("Hii...")}>
        Say hello From Store
      </button>
    </div>
  );
};

export default inject("testMobxStore")(observer(ComponentA));
