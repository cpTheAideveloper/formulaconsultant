"use client";

import React, { useState } from "react";
import { AppTypes } from "@/types";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  formulaData: AppTypes.FormulaResponse;
}

export default function Modal({ show, onClose, formulaData }: ModalProps) {
  const [customParams, setCustomParams] = useState("");

  if (!show) return null;

  const handleApply = () => {
    // Lógica simple para "modificar" la fórmula usando los parámetros
    // Solo a manera ilustrativa
    alert(`Nueva fórmula ajustada con: ${customParams}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-4 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Personalizar Fórmula</h2>
        <textarea
          className="border p-2 w-full mb-4"
          placeholder="Ingresa referencias de celdas o criterios adicionales"
          value={customParams}
          onChange={(e) => setCustomParams(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
          onClick={handleApply}
        >
          Aplicar
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}