import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Dice from "./components/Dice";
import "./CSS/styles.css";
function App() {
  const [dice, setDice] = useState(allNewDice());

  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    let numbers = [];
    dice.forEach((die) => {
      if (die.isHeld) {
        numbers.push(die.value);
      }
    });
    const isAllSame = numbers.every((number) => number === numbers[0]);
    if (isAllSame && numbers.length === 10) {
      setTenzies(true)
    }
  }, dice);

  function generateNewDie() {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    return {
      value: randomNumber,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    let newDice = [];
    for (let i = 1; i < 11; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice(event) {
    event.preventDefault();
    setDice((pervDice) => {
      return pervDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      });
    });
  }

  function holdDice(id) {
    setDice((pervDice) => {
      return pervDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }
  return (
    <div className="App">
      <main className="Main">
        <h1 className="heading">Tenzies</h1>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Dice diceArray={dice} holdDice={holdDice} />
        <button className="roll-button" onClick={rollDice}>
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;
