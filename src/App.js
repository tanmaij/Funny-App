import { useEffect, useState } from "react";
import "./App.css";
import Vending from "./Component/Vending";

import WaterVending from "./Component/WaterVendingMachine";
function App() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  var IdBox = ["A1", "A2", "A3", "B1", "B2", "B3"];
  var WaterType = ["sting", "coca", "fanta", "sprite"];
  const Water = WaterType[getRandomInt(WaterType.length)];
  var BoxWater = [];
  var GetItem = (IndexBox, IndexWater) => {
    BoxWater.push({ id: IdBox[IndexBox], Type: WaterType[IndexWater] });
    IdBox.splice(IndexBox, 1);
    WaterType.splice(IndexWater, 1);
  };
  const init = () => {
    IdBox = ["A1", "A2", "A3", "B1", "B2", "B3"];
    WaterType = ["sting", "coca", "fanta", "sprite"];

    BoxWater = [];
    while (WaterType.length > 0) {
      GetItem(getRandomInt(IdBox.length), getRandomInt(WaterType.length));
    }
    IdBox.forEach((idd) => {
      BoxWater.push({ id: idd, Type: "white" });
    });
    const IdBoxT = ["A1", "A2", "A3", "B1", "B2", "B3"];
    for (var i = 0; i < IdBoxT.length; i++) {
      for (var j = 0; j < BoxWater.length; j++) {
        if (BoxWater[j].id == IdBoxT[i]) {
          var temp = BoxWater[j];
          BoxWater[j] = BoxWater[i];
          BoxWater[i] = temp;
          break;
        }
      }
    }
    return BoxWater;
  };
  const [BW, setBW] = useState(init());
  const NewGame = () => {
    setBW(init());
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}> Hay lay {Water}</h1>
      <div className="WV" style={{ gridTemplateColumns: "60% auto" }}>
        <WaterVending BoxWater={BW} />
        <Vending
          style={{ marginTop: "50px" }}
          CheckKeyLog={{ setBWW: NewGame, Waterr: Water, Check: BW }}
        />
      </div>
    </>
  );
}

export default App;
