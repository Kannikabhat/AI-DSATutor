// ProgressTracker.tsx
"use client";
import React from "react";

export const ProgressTracker = ({ topic }: { topic: string }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-xl text-white shadow-lg">
      <h2 className="text-xl font-bold">Progress Tracker - {topic}</h2>
      <p>Coming soon: Track your learning progress and achievements!</p>
    </div>
  );
};

export default ProgressTracker;
