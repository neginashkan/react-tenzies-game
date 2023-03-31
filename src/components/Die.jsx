import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
function Die({ value, isHeld, id, handleClick }) {
      const diceIcons = [
        <FontAwesomeIcon icon={faDiceOne} className="die-icon" />,
        <FontAwesomeIcon icon={faDiceTwo} className="die-icon" />,
        <FontAwesomeIcon icon={faDiceThree} className="die-icon" />,
        <FontAwesomeIcon icon={faDiceFour} className="die-icon" />,
        <FontAwesomeIcon icon={faDiceFive} className="die-icon" />,
        <FontAwesomeIcon icon={faDiceSix} className="die-icon" />,
      ];
  return (
    <div className="Die">
      <button
        onClick={() => handleClick(id)}
        className={`die-button ${isHeld && "checked"}`}
      >
        {diceIcons[value-1]}
      </button>
    </div>
  );
}

export default Die;
