"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  initialCode: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode);

  return (
    <div className="p-4 bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-lg font-bold text-white mb-2">Code Editor</h2>
      <Editor
        height="300px"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
};

export default CodeEditor;
