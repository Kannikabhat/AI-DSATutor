import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { lessonsById } from '../../lesson_content';
import LessonPage from './LessonPage';

const DynamicLessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  
  if (!lessonId) {
    return <Navigate to="/lessons" replace />;
  }

  const lesson = lessonsById[lessonId];

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Lesson Not Found</h1>
          <p className="text-gray-600 mb-8">
            The lesson "{lessonId}" doesn't exist or hasn't been created yet.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return <LessonPage lesson={lesson} />;
};

export default DynamicLessonPage;