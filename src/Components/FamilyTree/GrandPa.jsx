import React from "react";
import Pa from "./Pa";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const GrandPa = ({ asset }) => {
  return (
    <div>
      <h2>GrandPa</h2>
      <section className="flex">
        <Pa asset={asset}></Pa>
        <Uncle></Uncle>
        <Aunt asset={asset}></Aunt>
      </section>
    </div>
  );
};

export default GrandPa;
