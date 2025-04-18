import React from "react";
import GrandPa from "./GrandPa";
import "./FamilyTree.css";

const FamilyTree = () => {
  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <GrandPa></GrandPa>
    </div>
  );
};

export default FamilyTree;
