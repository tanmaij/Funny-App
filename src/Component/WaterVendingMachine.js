import React from "react";
import Box from "./Box";
import "../App.css";
const WaterVending = ({ BoxWater }) => {
  const IdType = {
    id: "A1",
    Type: "sting",
  };
  return (
    <span className="WaterVending">
      {BoxWater.map((Boxwater) => (
        <Box IdType={Boxwater} />
      ))}
      {/* <Box IdType={IdType} />
      <Box IdType={IdType} />
      <Box IdType={IdType} />
      <Box IdType={IdType} />
      <Box IdType={IdType} />
      <Box IdType={IdType} /> */}
    </span>
  );
};
export default WaterVending;
