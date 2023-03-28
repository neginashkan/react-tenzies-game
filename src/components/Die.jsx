function Die({ value,isHeld, id, handleClick }) {
  return (
    <div className="Die">
      <button
        onClick={() => handleClick(id)}
        className={`die-button ${isHeld && "checked"}`}
      >
        {value}
      </button>
    </div>
  );
}

export default Die;
