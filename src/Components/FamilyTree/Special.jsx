import React, { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Special = ({ asset }) => {
  const newAsset = useContext(AssetContext);
  return (
    <div>
      <h2>Special</h2>
      <p> Asset:{asset}</p>
      <p>NewAssetFromContextApi:{newAsset}</p>
    </div>
  );
};

export default Special;
