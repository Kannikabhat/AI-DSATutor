import { Lesson } from '../types/lesson';

export const introductionToDSA: Lesson = {
  id: "introduction-to-dsa",
  title: "Introduction to Data Structures and Algorithms",
  description: "Understand what data structures and algorithms are and why they're important in programming.",
  sections: [
    {
      id: "intro",
      type: "explanation",
      content: "Welcome! Before we dive into complex data structures, let’s ask a simple question..."
    },
    {
      id: "variables-question",
      type: "yesno",
      question: "Suppose you're managing data about 1000 students. Would you create 1000 different variables to store each one?",
      yesNoFeedback: {
        yes: "That's possible... but very inefficient and hard to maintain. Imagine updating each one manually!",
        no: "Exactly! We need something smarter than manually declaring thousands of variables."
      }
    },
    {
      id: "ds-benefits",
      type: "explanation",
      content: "This is where data structures come in. They help us store and manage large amounts of data efficiently."
    },
    {
      id: "ds-definition",
      type: "definition",
      title: "What is a Data Structure?",
      content: "A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently."
    },
    {
      id: "ds-mcq",
      type: "mcq",
      question: "Which of the following is a data structure?",
      options: ["Variable", "Array", "Function", "Loop"],
      correctAnswer: 1,
      feedback: {
        correct: "Correct! Arrays are data structures used to store multiple values.",
        incorrect: "Actually, Arrays are the correct answer. They are a basic data structure for storing multiple values."
      }
    },
    {
      id: "algo-intro",
      type: "explanation",
      content: "Now, let’s understand why algorithms are paired with data structures."
    },
    {
      id: "algo-definition",
      type: "definition",
      title: "What is an Algorithm?",
      content: "An algorithm is a step-by-step procedure to solve a specific problem using a computer."
    },
    {
      id: "algo-yesno",
      type: "yesno",
      question: "Do you think using a good algorithm can reduce time and memory usage?",
      yesNoFeedback: {
        yes: "Absolutely! That’s why algorithm efficiency matters.",
        no: "Well, actually, algorithms define how fast and how much memory your program uses. Choosing the right one is essential."
      }
    },
    {
      id: "dsa-combo-explanation",
      type: "explanation",
      content: "So, the study of Data Structures and Algorithms helps you build programs that are both efficient and maintainable."
    },
    {
      id: "dsa-mcq",
      type: "mcq",
      question: "Which of these best describes the combination of data structures and algorithms?",
      options: [
        "A way to store large data only",
        "A method to display data",
        "A technique to write inefficient code",
        "A system to organize and solve problems efficiently"
      ],
      correctAnswer: 3,
      feedback: {
        correct: "Correct! DSA helps organize data and solve problems in an efficient manner.",
        incorrect: "Not quite. The correct answer is: 'A system to organize and solve problems efficiently.'"
      }
    },
    {
      id: "conclusion",
      type: "conclusion",
      title: "Awesome! 🚀",
      content: "Great job! You now know what data structures and algorithms are and why they matter. Let’s now look at one of the simplest data structures — the Array!"
    }
  ]
};
