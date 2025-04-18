import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Friend = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <h2>Friend</h2>
      <button onClick={() => setMoney(money + 5000)}>Add 5000</button>
    </div>
  );
};

export default Friend;
