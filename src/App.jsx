import { useState } from "react";
import Dice from "./components/Dice";
import "./CSS/styles.css";
function App() {
  function allNewDice() {
    let newDice = [];
    for (let i = 1; i < 11; i++) {
      const randomNumber = Math.floor(Math.random() * 6 + 1);
      newDice.push(randomNumber);
    }
    return newDice;
  }
  console.log(allNewDice());
  return (
    <div className="App">
      <main className="Main">
        <h1 className="heading">Tenzies</h1>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Dice />
        <button className="roll-button">Roll</button>
      </main>
    </div>
  );
}

export default App;
