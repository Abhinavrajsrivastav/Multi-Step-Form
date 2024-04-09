import React from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome-peer-container">
      <div className="background">
          <img src="./images/james-wheeler-InOgamK2cuY-unsplash.jpg" alt="" />
      </div>
     <div className="welcome-container">
      <div className="court-section">
        <h2>Welcome to better health, Quiz app. know your health better and get updated.</h2>
        <Link to="/Quiz" className="btn">Start Quiz</Link>
      </div>
     </div>

    </div>
  );
}

export default Welcome;
