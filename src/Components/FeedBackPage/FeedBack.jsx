import React from 'react';
import './FeedBack.css';
import { useLocation } from 'react-router-dom';

const FeedBack = () => {

  const location = useLocation();
  const state = location.state || {};
  console.log(state.Score); // Corrected to lowercase "score"
  const score = state.Score || null; // Corrected to lowercase "score"
  const totalQuestions = state.TotalQuestions || null; // Corrected to lowercase "totalQuestions"

  const calculatePercentage = () => {
    if (score !== null && totalQuestions !== null && totalQuestions !== 0) {
      return ((score / totalQuestions) * 100).toFixed(2);
    } else {
      return 0;
    }
  };

  return (
    <div className="feedback-container">
      <div className="background">
        <img src="./images/james-wheeler-InOgamK2cuY-unsplash.jpg" alt="" />
      </div>
      <h2>Feedback</h2>
      <p>Your score is: {score}/{totalQuestions}</p>
      <p>Percentage: {calculatePercentage()}%</p>
      {calculatePercentage() >= 70 ? <p>Congratulations! Your health is well.</p> : 
        calculatePercentage() >= 50 ? <p>Your health is average.</p> : 
        <p>You need to work on your health.</p>}
    </div>
  );
}

export default FeedBack;
