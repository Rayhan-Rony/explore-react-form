import React from "react";
import Myself from "./Myself";
import Sister from "./Sister";
import Bro from "./Bro";

const Pa = () => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <Myself></Myself>
        <Bro></Bro>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Pa;
