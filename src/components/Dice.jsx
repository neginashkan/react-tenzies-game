import Die from "./Die";
import { useState } from "react";
function Dice({ diceArray, holdDice }) {
  const diceElements = diceArray.map((die) => {
    return <Die key={die.id} {...die} handleClick={holdDice} />;
  });
  return <div className="Dice-Container">{diceElements}</div>;
}

export default Dice;
