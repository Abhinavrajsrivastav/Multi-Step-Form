import React from 'react';
import './FeedBack.css';

const FeedBack = (props) => {
  const { score, totalQuestions } = props;

  const calculatePercentage = () => {
    if (score !== null && totalQuestions !== null && totalQuestions !== 0) {
      return ((score / totalQuestions) * 100).toFixed(2);
    } else {
      return 0;
    }
  };

  return (
    <div className="feedback-container">
      <h2>Quiz Result</h2>
      <p>You scored 75 out of 100 %</p>
      <p>Congratulations! You passed the quiz.</p>
    </div>
  );
}

export default FeedBack;
