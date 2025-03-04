"use client";

import React from "react";

interface ExamplesProps {
  onExampleClick: (example: string) => void;
}

export default function Examples({ onExampleClick }: ExamplesProps) {
  return (
    <div className="flex gap-4 mt-4">
      <button
        className="px-3 py-2 bg-blue-600 text-white rounded"
        onClick={() => onExampleClick("Calcular costos")}
      >
        Calcular costos
      </button>
      <button
        className="px-3 py-2 bg-green-600 text-white rounded"
        onClick={() => onExampleClick("Automatizar inventarios")}
      >
        Automatizar inventarios
      </button>
      <button
        className="px-3 py-2 bg-purple-600 text-white rounded"
        onClick={() => onExampleClick("Crear gráficos dinámicos")}
      >
        Crear gráficos dinámicos
      </button>
    </div>
  );
}