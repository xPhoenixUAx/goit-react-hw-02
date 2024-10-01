import React from "react";

const Feedback = ({ feedbackTypes, totalFeedback, positivePercent }) => (
  <div>
    <h2>Статистика відгуків:</h2>
    <p>Добре: {feedbackTypes.good}</p>
    <p>Нейтрально: {feedbackTypes.neutral}</p>
    <p>Погано: {feedbackTypes.bad}</p>
    <p>Загальна кількість відгуків: {totalFeedback}</p>
    <p>Позитивні відгуки: {positivePercent}%</p>
  </div>
);

export default Feedback;
