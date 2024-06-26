import React, { useState, useEffect } from 'react';
import './Quiz.css'; // Import CSS file for styling
import Questions from '../Data/Questions'; // Import questions array
import { useNavigate } from 'react-router-dom'; // Import Link for routing

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const navigate = useNavigate();

  const questions = Questions();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(null); // Clear selected option for the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    if (currentQuestion === questions.length - 1) {
      setQuizCompleted(true);
    }
  }, [currentQuestion, questions.length]);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      navigate('/FeedBack', { state:{ Score: score, TotalQuestions: questions.length }});
      console.log(score);
    } else {
      alert("Please select an option before submitting.");
    }
  };

  return (
    <div className="quiz-container">
      <div className="background">
        <img src="./images/james-wheeler-InOgamK2cuY-unsplash.jpg" alt="" />
      </div>
      <h2>Question {currentQuestion + 1}:</h2>
      <p>{questions[currentQuestion].question}</p>
      <div className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="buttons-container">
        {currentQuestion === questions.length - 1 && (
          <button  className="button" onClick={handleSubmit}>
            Submit
          </button>
        )}
        {currentQuestion < questions.length - 1 && (
          <button className="button" onClick={handleNextQuestion}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
