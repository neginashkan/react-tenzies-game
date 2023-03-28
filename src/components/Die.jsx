function Die({ value, isChecked }) {
  return (
    <div className="Die">
      <button className={`die-button ${isChecked && "checked"}`}>
        {value}
      </button>
    </div>
  );
}

export default Die;
