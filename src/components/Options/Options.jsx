const Options = ({ handleFeedback, handleReset }) => {
  return (
    <div>
      <button onClick={() => handleFeedback("good")}>Добре</button>
      <button onClick={() => handleFeedback("neutral")}>Нейтрально</button>
      <button onClick={() => handleFeedback("bad")}>Погано</button>
      {(feedbackTypes.good > 0 || feedbackTypes.neutral > 0 || feedbackTypes.bad > 0) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};

export default Options;
