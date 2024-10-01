const Options = ({ handleFeedback, handleReset }) => {
  return (
    <div>
      <button onClick={() => handleFeedback("good")}>Добре</button>
      <button onClick={() => handleFeedback("neutral")}>Нейтрально</button>
      <button onClick={() => handleFeedback("bad")}>Погано</button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Options;
