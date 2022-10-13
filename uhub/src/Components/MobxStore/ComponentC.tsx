import { FC } from "react";
import { observer } from "mobx-react-lite";
import { TestMobxStore } from "../../Store";
import { inject } from "mobx-react";

type Props = {
  testMobxStore?: TestMobxStore;
};

const ComponentC: FC<Props> = ({ testMobxStore }) => {
  return <div>Message From C : {testMobxStore?.message}</div>;
};

export default inject("testMobxStore")(observer(ComponentC));
