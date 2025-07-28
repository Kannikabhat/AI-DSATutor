export interface LessonSection {
  id: string;
  type: 'explanation' | 'definition' | 'yesno' | 'mcq' | 'conclusion';
  title?: string;
  content?: string;
  question?: string;
  options?: string[];
  correctAnswer?: number;
  feedback?: {
    correct: string;
    incorrect: string;
  };
  yesNoFeedback?: {
    yes: string;
    no: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  sections: LessonSection[];
}