import { Lesson } from '../types/lesson';

export const memoryLayout: Lesson = {
  id: "memory-layout",
  title: "Memory Layout of Arrays",
  description: "Understand how arrays are stored in computer memory",
  sections: [
    {
      id: "intro",
      type: "explanation",
      content: "Understanding how arrays are stored in memory is crucial for writing efficient code. This knowledge helps you understand why certain operations are fast while others are slow."
    },
    {
      id: "contiguous-memory",
      type: "definition",
      title: "Contiguous Memory Storage",
      content: "Arrays store elements in contiguous memory locations. This means if the first element is at address 1000, and each element takes 4 bytes, then the second element will be at address 1004, the third at 1008, and so on."
    },
    {
      id: "memory-advantage",
      type: "yesno",
      question: "Does storing elements contiguously in memory provide any performance benefits?",
      yesNoFeedback: {
        yes: "Exactly right! Contiguous storage enables cache locality, predictable memory access patterns, and allows for direct address calculation using the formula: base_address + (index × element_size).",
        no: "Actually, it provides significant benefits! Contiguous storage improves cache performance, enables direct address calculation, and makes memory access patterns predictable for the CPU."
      }
    },
    {
      id: "conclusion",
      type: "conclusion",
      title: "Memory Mastery! 🧠",
      content: "You now understand how arrays leverage contiguous memory for efficient access. This foundation will help you appreciate why arrays excel at random access but struggle with insertions and deletions."
    }
  ]
};