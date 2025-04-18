import React, { useContext } from "react";
import { MoneyContext } from "./FamilyTree";

const Bro = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Brother</h2>
      <button onClick={() => setMoney(money + 2000)}>Add 2000</button>
    </div>
  );
};

export default Bro;
