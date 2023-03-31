import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import useSound from "use-sound";
import Dice from "./components/Dice";
import "./CSS/styles.css";
import winningSound from "./audio/tadaa.mp3"
function App() {
  const [dice, setDice] = useState(allNewDice());
  const [playMusic, { stopPlayMusic }] = useSound(winningSound, {
    volume: 0.5,
  });
  const [tenzies, setTenzies] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: undefined, height :undefined});
  useEffect(()=>{
    function handleResize(){
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    handleResize()
    return () => window.removeEventListener("resize", handleResize);
  },[])
  useEffect(() => {
    let numbers = [];
    dice.forEach((die) => {
      if (die.isHeld) {
        numbers.push(die.value);
      }
    });
    const isAllSame = numbers.every((number) => number === numbers[0]);
    if (isAllSame && numbers.length === 10) {
      playMusic();
      setTenzies(true);
    }else if((!isAllSame && numbers.length === 10)){
      alert("you lose")
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
    if (!tenzies) {
      setDice((pervDice) => {
        return pervDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        });
      });
    } else {
      setDice(allNewDice());
      setTenzies(false);
    }
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
        {tenzies && <Confetti width={windowSize.width} height={windowSize.height} />}
        <h1 className="heading">Tenzies</h1>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Dice diceArray={dice} holdDice={holdDice} />
        <button
          className={`roll-button ${tenzies && "new-game"}`}
          onClick={rollDice}
        >
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </div>
  );
}

export default App;

/* TODO: 
 ○ Track the number of rolls
 ○ Track the time it took to win
 ○ Save your best time to localStorage
 ○ Add cruser pointer custum
 ○ 
 ○ 
*/
