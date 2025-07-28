import { introductionToDSA } from './introduction-to-dsa';
import { introductionToArrays } from './introduction-to-arrays';
import { memoryLayout } from './memory-layout';
import { Lesson } from '../types/lesson';

// Placeholder lessons for the remaining topics
const createPlaceholderLesson = (id: string, title: string): Lesson => ({
  id,
  title,
  description: `Learn about ${title.toLowerCase()}`,
  sections: [
    {
      id: "intro",
      type: "explanation",
      content: `Welcome to the lesson on ${title}. This lesson is coming soon!`
    },
    {
      id: "conclusion",
      type: "conclusion",
      title: "Coming Soon! 🚧",
      content: `The ${title} lesson is currently being developed. Check back soon for comprehensive content on this important topic!`
    }
  ]
});

export const lessonsById: Record<string, Lesson> = {
  "introduction-to-dsa": introductionToDSA,
  "introduction-to-arrays": introductionToArrays,
  "memory-layout": memoryLayout,
  "traversal": createPlaceholderLesson("traversal", "Traversal of Arrays"),
  "insertion": createPlaceholderLesson("insertion", "Insertion in Arrays"),
  "deletion": createPlaceholderLesson("deletion", "Deletion in Arrays"),
  "searching": createPlaceholderLesson("searching", "Searching in Arrays"),
  "sorting": createPlaceholderLesson("sorting", "Sorting Arrays"),
  "applications": createPlaceholderLesson("applications", "Array Applications"),
  "multidimensional": createPlaceholderLesson("multidimensional", "Multidimensional Arrays")
};

export const lessonsList = [
  { id: "introduction-to-dsa", title: "Introduction to Data Structures" },
  { id: "introduction-to-arrays", title: "Introduction to Arrays" },
  { id: "memory-layout", title: "Memory Layout of Arrays" },
  { id: "traversal", title: "Traversal of Arrays" },
  { id: "insertion", title: "Insertion in Arrays" },
  { id: "deletion", title: "Deletion in Arrays" },
  { id: "searching", title: "Searching in Arrays" },
  { id: "sorting", title: "Sorting Arrays" },
  { id: "applications", title: "Array Applications" },
  { id: "multidimensional", title: "Multidimensional Arrays" }
];