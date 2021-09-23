import React from "react";
import "../App.css";

const KeyVending = ({ handleClick }) => {
  return (
    <div className="KeyVending">
      <button onClick={(e) => handleClick("A")}>A</button>
      <button onClick={(e) => handleClick("B")}>B</button>
      <button onClick={(e) => handleClick("C")}>C</button>
      <button onClick={(e) => handleClick("1")}>1</button>
      <button onClick={(e) => handleClick("2")}>2</button>
      <button onClick={(e) => handleClick("3")}>3</button>
    </div>
  );
};

export default KeyVending;
