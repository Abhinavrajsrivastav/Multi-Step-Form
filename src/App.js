import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Welcome from './Components/WelcomePage/Welcome';
import Quiz from './Components/QuizPage/Quiz';
import FeedBack from './Components/FeedBackPage/FeedBack';
import NotFound from './Components/PageNotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<> 
        <Nav />
        <Welcome />
        </>}/>

        <Route path="/Quiz" element={<>
          <Nav />
          <Quiz />
          </>}/> 
        <Route path="/FeedBack" element={<>
          <Nav />
          <FeedBack />
          </>}/> 
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
