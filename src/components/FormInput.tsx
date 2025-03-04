"use client";

import React, { useState } from "react";

interface FormInputProps {
  onSubmit: (value: string) => void;
  onReset: () => void;
}

export default function FormInput({ onSubmit, onReset }: FormInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim().length > 0) {
      onSubmit(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <textarea
        className="border p-2 w-full max-w-lg"
        placeholder="Describe tu necesidad en Excel o Google Sheets..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleSubmit}
        >
          Generar Fórmula
        </button>
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded"
          onClick={() => {
            setInputValue("");
            onReset();
          }}
        >
          Empezar de nuevo
        </button>
      </div>
    </div>
  );
}