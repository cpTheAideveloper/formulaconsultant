"use client";

import React from "react";
import { AppTypes } from "@/types";

interface ResultsProps {
  formulaData: AppTypes.FormulaResponse | null;
  onCopy: (text: string) => void;
  onCustomize: () => void;
}

export default function Results({
  formulaData,
  onCopy,
  onCustomize,
}: ResultsProps) {
  if (!formulaData) return null;

  return (
    <div className="mt-6 w-full max-w-xl mx-auto border p-4 rounded">
      <h3 className="font-bold mb-2">Fórmula en Excel:</h3>
      <p className="mb-2">{formulaData.excelFormula}</p>
      <button
        className="px-3 py-2 bg-blue-500 text-white rounded mb-4"
        onClick={() => onCopy(formulaData.excelFormula)}
      >
        Copiar Fórmula Excel
      </button>

      <h3 className="font-bold mb-2">Fórmula en Google Sheets:</h3>
      <p className="mb-2">{formulaData.googleSheetsFormula}</p>
      <button
        className="px-3 py-2 bg-green-500 text-white rounded mb-4"
        onClick={() => onCopy(formulaData.googleSheetsFormula)}
      >
        Copiar Fórmula Sheets
      </button>

      <h3 className="font-bold mb-2">Ejemplo práctico:</h3>
      <p className="mb-2">{formulaData.exampleUsage}</p>

      <h3 className="font-bold mb-2">Cómo utilizarla:</h3>
      <p className="mb-4">{formulaData.description}</p>

      <button
        className="px-4 py-2 bg-gray-600 text-white rounded"
        onClick={onCustomize}
      >
        Personalizar Fórmula
      </button>
    </div>
  );
}