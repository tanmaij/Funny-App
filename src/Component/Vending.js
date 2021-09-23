import "../App.css";
import KeyVending from "./KeyVending";
import ScreenVending from "./ScreenVending";
import React, { useState } from "react";

const Vending = ({ CheckKeyLog }) => {
  const [content, setcontent] = useState("");
  const HandleClick = (contentx) => {
    var NewKey = content + contentx;

    if (NewKey.length > 1) {
      var Id;
      CheckKeyLog.Check.forEach((bW) => {
        if (bW.Type == CheckKeyLog.Waterr) {
          Id = bW.id;
        }
      });

      if (Id == NewKey) {
        NewKey = "";
        CheckKeyLog.setBWW();
      } else {
        NewKey = "";
      }
    }
    setcontent(NewKey);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <ScreenVending Content={content} />
      <KeyVending handleClick={HandleClick} />
    </div>
  );
};
export default Vending;
