import React from "react";
import "../App.css";
import Image from "../Image/Image";
var WaterBottle = (Type) => {
  var TypeStr = Type.Type;
  var Img;

  for (let i = 0; i < Image.length; i++) {
    if (Image[i].GetImage(TypeStr)) Img = Image[i].image;
  }
  return (
    <div className="waterbottle">
      <img
        style={
          ({ objectFit: "cover" }, { width: "120px" }, { height: "120px" })
        }
        src={Img}
      ></img>
    </div>
  );
};

export default WaterBottle;
