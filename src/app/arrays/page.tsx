"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CodeEditor } from "@/components/ui/CodeEditor";
import { Quiz } from "@/components/ui/Quiz";
import Chatbot from "@/components/ui/Chatbot";
import { ProgressTracker } from "@/components/ui/ProgressTracker";

const ArraysPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header Section */}
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Arrays: The Foundation of Data Structures
      </motion.h1>

      {/* Explanation with Animation */}
      <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg">
          Arrays are a fundamental data structure that store elements in a
          contiguous memory block. They provide fast access to elements via
          indexing but have a fixed size.
        </p>
      </motion.div>

      {/* Interactive Code Editor */}
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Try it Yourself!</h2>
        <CodeEditor
          initialCode={`// Declare an array\nint arr[5] = {1, 2, 3, 4, 5};\n// Access an element\ncout << arr[2]; // Output: 3`}
        />
      </div>
  

      {/* Quiz Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Test Your Knowledge</h2>
        <Quiz topic="arrays" />
      </div>

      {/* Chatbot Tutor */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Need Help? Ask the AI Tutor!</h2>
        <Chatbot topic="arrays" />
      </div>

      {/* Progress Tracker */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
        <ProgressTracker topic="arrays" />
      </div>
    </div>
  );
};

export default ArraysPage;
