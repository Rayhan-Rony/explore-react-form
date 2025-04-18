import React from "react";
import Pa from "./Pa";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const GrandPa = () => {
  return (
    <div>
      <h2>GrandPa</h2>
      <section className="flex">
        <Pa></Pa>
        <Uncle></Uncle>
        <Aunt></Aunt>
      </section>
    </div>
  );
};

export default GrandPa;
