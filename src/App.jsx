import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);
  const handleFeedback = (feedbackType) => {
    setFeedbackTypes((prevFeedbackTypes) => ({
      ...prevFeedbackTypes,
      [feedbackType]: prevFeedbackTypes[feedbackType] + 1,
    }));
  };
  const handleReset = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positivePercent =
    totalFeedback > 0
      ? Math.round((feedbackTypes.good / totalFeedback) * 100)
      : 0;
  return (
    <div>
      <Description />
      <Options handleFeedback={handleFeedback} handleReset={handleReset} feedbackTypes={feedbackTypes} />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positivePercent={positivePercent}
        />
      ) : (
        <Notification message="Відгуки відсутні" />
      )}
    </div>
  );
};

export default App;
