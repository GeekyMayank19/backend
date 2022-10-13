import { inject, observer } from "mobx-react";
import { FC } from "react";
import { TestMobxStore } from "../../Store";
import ComponentC from "./ComponentC";

type Props = {
  testMobxStore?: TestMobxStore;
};

const ComponentB: FC<Props> = ({ testMobxStore }) => {
  return (
    <div>
      Message From B : {testMobxStore?.message}
      <ComponentC />
    </div>
  );
};

export default inject("testMobxStore")(observer(ComponentB));
