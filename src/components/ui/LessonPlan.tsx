import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, BookOpen, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { introductionToDSA } from '../../lesson_content/introduction-to-dsa';
import { LessonSection } from '../../types/lesson';
import Confetti from './Confetti';

const LessonPage: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const currentSection = introductionToDSA.sections[currentSectionIndex];
  const isLastSection = currentSectionIndex === introductionToDSA.sections.length - 1;

  const handleNext = () => {
    if (!isLastSection) {
      setCurrentSectionIndex(prev => prev + 1);
      setShowFeedback(false);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setFeedbackText('');
    }
  };

  const handleYesNoClick = (answer: 'yes' | 'no') => {
    if (currentSection.type === 'yesno' && currentSection.yesNoFeedback) {
      setFeedbackText(currentSection.yesNoFeedback[answer]);
      setShowFeedback(true);
      setTimeout(() => {
        handleNext();
      }, 2000);
    }
  };

  const handleMCQClick = (optionIndex: number) => {
    if (currentSection.type === 'mcq' && currentSection.feedback) {
      setSelectedAnswer(optionIndex);
      const correct = optionIndex === currentSection.correctAnswer;
      setIsCorrect(correct);
      setFeedbackText(correct ? currentSection.feedback.correct : currentSection.feedback.incorrect);
      setShowFeedback(true);
      
      setTimeout(() => {
        handleNext();
      }, 2500);
    }
  };

  useEffect(() => {
    if (currentSection.type === 'conclusion') {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [currentSection.type]);

  const renderSection = (section: LessonSection) => {
    switch (section.type) {
      case 'explanation':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              {section.content}
            </p>
          </motion.div>
        );

      case 'definition':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-900">{section.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </motion.div>
        );

      case 'yesno':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-8">{section.question}</h3>
            
            {!showFeedback ? (
              <div className="flex justify-center space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleYesNoClick('yes')}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md"
                >
                  Yes
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleYesNoClick('no')}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md"
                >
                  No
                </motion.button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto"
              >
                <p className="text-gray-700 leading-relaxed">{feedbackText}</p>
              </motion.div>
            )}
          </motion.div>
        );

      case 'mcq':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-8 text-center">{section.question}</h3>
            
            {!showFeedback ? (
              <div className="space-y-4 max-w-2xl mx-auto">
                {section.options?.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleMCQClick(index)}
                    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                  >
                    <span className="font-medium text-blue-600 mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </motion.button>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
              >
                <div className="space-y-4 mb-6">
                  {section.options?.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg ${
                        index === section.correctAnswer 
                          ? 'border-green-500 bg-green-50' 
                          : index === selectedAnswer && !isCorrect
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="font-medium text-gray-600 mr-3">{String.fromCharCode(65 + index)}.</span>
                        <span className="flex-1">{option}</span>
                        {index === section.correctAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        )}
                        {index === selectedAnswer && !isCorrect && (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={`p-6 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
                  <p className="text-gray-700 leading-relaxed">{feedbackText}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        );

      case 'conclusion':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-12 shadow-lg">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              </motion.div>
              
              <h2 className="text-3xl font-bold text-purple-900 mb-6">{section.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                {section.content}
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <span className="inline-flex items-center bg-purple-100 text-purple-800 px-6 py-2 rounded-full font-medium">
                  Lesson Complete! 🎉
                </span>
              </motion.div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <AnimatePresence>
        {showConfetti && <Confetti />}
      </AnimatePresence>
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-white rounded-2xl px-8 py-4 shadow-md border border-gray-200">
            <span className="text-2xl mr-3">📘</span>
            <h1 className="text-2xl font-bold text-gray-800">
              {introductionToDSA.title}
            </h1>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-600">
              {currentSectionIndex + 1} / {introductionToDSA.sections.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSectionIndex + 1) / introductionToDSA.sections.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSectionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              {renderSection(currentSection)}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {!isLastSection && !showFeedback && currentSection.type !== 'yesno' && currentSection.type !== 'mcq' && (
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonPage;