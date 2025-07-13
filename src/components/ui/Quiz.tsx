// Quiz.tsx
"use client";
import React, { useState } from "react";

export const Quiz = ({ topic }: { topic: string }) => {
  const questions = [
    {
      question: "What is the time complexity of accessing an element in an array?",
      options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "Which of the following data structures allows dynamic resizing?",
      options: ["Array", "Linked List", "Stack", "Queue"],
      answer: "Linked List"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-xl text-white shadow-lg">
      <h2 className="text-xl font-bold">Quiz - {topic}</h2>
      {showScore ? (
        <p>Your score: {score}/{questions.length}</p>
      ) : (
        <div>
          <p className="mb-2">{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button 
              key={index} 
              className={`block w-full p-2 mb-2 rounded ${selectedOption === option ? 'bg-blue-500' : 'bg-gray-700'}`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>
          ))}
          <button className="mt-2 p-2 bg-green-500 rounded" onClick={handleAnswerSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;