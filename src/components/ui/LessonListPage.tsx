"use client";


import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BookOpen, Database, MemoryStick as Memory, Navigation, Plus, Trash2, Search, ArrowUpDown, Grid3X3, Lightbulb } from 'lucide-react';
import { lessonsList } from '../../lesson_content';

const LessonsListPage: React.FC = () => {
  const router = useRouter();

  const getIconForLesson = (lessonId: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      "introduction-to-dsa": <BookOpen className="w-8 h-8" />,
      "introduction-to-arrays": <Database className="w-8 h-8" />,
      "memory-layout": <Memory className="w-8 h-8" />,
      "traversal": <Navigation className="w-8 h-8" />,
      "insertion": <Plus className="w-8 h-8" />,
      "deletion": <Trash2 className="w-8 h-8" />,
      "searching": <Search className="w-8 h-8" />,
      "sorting": <ArrowUpDown className="w-8 h-8" />,
      "applications": <Lightbulb className="w-8 h-8" />,
      "multidimensional": <Grid3X3 className="w-8 h-8" />
    };
    return iconMap[lessonId] || <BookOpen className="w-8 h-8" />;
  };

  const getColorForLesson = (index: number) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-orange-500 to-orange-600',
      'from-pink-500 to-pink-600',
      'from-indigo-500 to-indigo-600',
      'from-red-500 to-red-600',
      'from-teal-500 to-teal-600',
      'from-yellow-500 to-yellow-600',
      'from-cyan-500 to-cyan-600'
    ];
    return colors[index % colors.length];
  };

  const handleLessonClick = (lessonId: string) => {
   router.push(`/lesson/${lessonId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white rounded-3xl px-8 py-6 shadow-xl border border-gray-200 mb-6">
            <span className="text-4xl mr-4">📚</span>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Data Structures & Algorithms
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Master the fundamentals of computer science with our interactive lessons. 
            Start your journey from basic concepts to advanced algorithms.
          </p>
        </motion.div>

        {/* Lessons Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {lessonsList.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLessonClick(lesson.id)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Icon Header */}
                  <div className={`bg-gradient-to-r ${getColorForLesson(index)} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center justify-center">
                      {getIconForLesson(lesson.id)}
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white opacity-10 rounded-full" />
                    <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white opacity-10 rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {lesson.title}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        Lesson {index + 1}
                      </span>
                      
                      <motion.div
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg 
                          className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Progress Bar (placeholder) */}
                  <div className="px-6 pb-6">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${getColorForLesson(index)} h-2 rounded-full transition-all duration-300`}
                        style={{ width: index === 0 ? '100%' : index === 1 ? '60%' : index === 2 ? '30%' : '0%' }}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">
                        {index === 0 ? 'Completed' : index === 1 ? 'In Progress' : index === 2 ? 'Started' : 'Not Started'}
                      </span>
                      <span className="text-xs text-gray-500">
                        {index === 0 ? '100%' : index === 1 ? '60%' : index === 2 ? '30%' : '0%'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Learning Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-800">Completed</h3>
                <p className="text-gray-600 text-sm">Lessons finished</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-800">In Progress</h3>
                <p className="text-gray-600 text-sm">Currently learning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-gray-600">7</span>
                </div>
                <h3 className="font-semibold text-gray-800">Remaining</h3>
                <p className="text-gray-600 text-sm">Lessons to explore</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LessonsListPage;