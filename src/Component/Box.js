import React from "react";
import WaterBottle from "./WaterBottle";
import "../App.css";
var Box = ({ IdType }) => {
  const Type = IdType.Type;
  return (
    <span className="Box">
      <WaterBottle Type={Type} />
      <div className="id">{IdType.id}</div>
    </span>
  );
};
export default Box;
