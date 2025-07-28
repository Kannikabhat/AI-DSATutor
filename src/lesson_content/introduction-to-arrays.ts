import { Lesson } from '../types/lesson';

export const introductionToArrays: Lesson = {
  id: "introduction-to-arrays",
  title: "Introduction to Arrays",
  description: "Learn the basics of arrays and their fundamental operations",
  sections: [
    {
      id: "intro",
      type: "explanation",
      content: "Arrays are one of the most fundamental data structures in computer science. They provide a way to store multiple elements of the same type in a contiguous block of memory, allowing for efficient access and manipulation of data."
    },
    {
      id: "what-is-array",
      type: "definition",
      title: "What is an Array?",
      content: "An array is a collection of elements stored at contiguous memory locations. Each element can be accessed directly using its index, making arrays perfect for scenarios where you need fast, random access to data."
    },
    {
      id: "array-benefits",
      type: "yesno",
      question: "Do you think arrays are useful for storing a list of student grades?",
      yesNoFeedback: {
        yes: "Absolutely! Arrays are perfect for storing homogeneous data like student grades. You can easily access any grade by its position and perform operations like calculating averages.",
        no: "Actually, arrays are ideal for this! Since all grades are the same data type (numbers), arrays provide efficient storage and easy access to calculate statistics like averages and find min/max values."
      }
    },
    {
      id: "array-indexing",
      type: "mcq",
      question: "In most programming languages, array indexing starts from:",
      options: [
        "1 (one-based indexing)",
        "0 (zero-based indexing)",
        "It depends on the array size",
        "Arrays don't use indexing"
      ],
      correctAnswer: 1,
      feedback: {
        correct: "Correct! Most programming languages like C, Java, Python, and JavaScript use zero-based indexing, meaning the first element is at index 0.",
        incorrect: "Actually, most programming languages use zero-based indexing, where the first element is at index 0. This is more efficient for memory address calculations."
      }
    },
    {
      id: "conclusion",
      type: "conclusion",
      title: "Great Job! 🎯",
      content: "You've learned the fundamentals of arrays! Arrays are the building blocks for more complex data structures. Next, we'll explore how arrays are laid out in memory and why this matters for performance."
    }
  ]
};