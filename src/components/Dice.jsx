import Die from "./Die";
import { useState } from "react";
function Dice({ diceArray }) {
  const diceElements = diceArray.map((number) => {
    return <Die value={number} />;
  });
  return <div className="Dice-Container">{diceElements}</div>;
}

export default Dice;
