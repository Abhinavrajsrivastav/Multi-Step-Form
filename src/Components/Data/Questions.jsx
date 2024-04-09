import React from 'react';

const Questions = () => {
  const questions = [
    {
      question: 'How many hours of sleep do you get on average per night?',
      options: ['Less than 6 hours', '6-8 hours', 'More than 8 hours'],
      correctAnswer: '6-8 hours'
    },
    {
      question: 'How many glasses of water do you drink per day?',
      options: ['Less than 4 glasses', '4-6 glasses', 'More than 6 glasses'],
      correctAnswer: '4-6 glasses'
    },
    {
      question: 'How often do you exercise per week?',
      options: ['Never', '1-2 times', '3-5 times', 'Everyday'],
      correctAnswer: '3-5 times'
    },
    {
      question: 'How often do you consume fruits and vegetables?',
      options: ['Rarely', 'Once a day', 'Twice a day or more'],
      correctAnswer: 'Twice a day or more'
    },
    {
      question: 'How often do you experience stress?',
      options: ['Rarely or never', 'Sometimes', 'Frequently'],
      correctAnswer: 'Sometimes'
    },
    {
      question: 'Do you smoke?',
      options: ['Yes', 'No'],
      correctAnswer: 'No'
    },
    {
      question: 'How often do you consume sugary or caffeinated drinks?',
      options: ['Multiple times a day', 'Once a day', 'Rarely or never'],
      correctAnswer: 'Rarely or never'
    },
    {
      question: 'How many meals do you eat per day?',
      options: ['Less than 3 meals', '3 meals', 'More than 3 meals'],
      correctAnswer: '3 meals'
    },
    {
      question: 'Do you get regular checkups with your doctor?',
      options: ['Yes, annually', 'Yes, biannually', 'No'],
      correctAnswer: 'Yes, annually'
    },
    {
      question: 'How often do you get enough sunlight exposure?',
      options: ['Daily', 'Few times a week', 'Rarely or never'],
      correctAnswer: 'Few times a week'
    }
  ];

  return questions;
}

export default Questions;
