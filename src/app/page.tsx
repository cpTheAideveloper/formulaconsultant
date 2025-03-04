"use client";

import React, { useState } from "react";
import FormInput from "@/components/FormInput";
import Results from "@/components/Results";
import Modal from "@/components/Modal";
import Examples from "@/components/Examples";
import { AppTypes } from "@/types";

export default function Page() {
  const [formulaData, setFormulaData] = useState<AppTypes.FormulaResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (value: string) => {
    try {
      setLoading(true);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: value }),
      });
      const data = await response.json();
      setLoading(false);

      // Parseamos la respuesta del asistente (que debería ser un JSON)
      if (data.aiMessage) {
        const parsed: AppTypes.FormulaResponse = JSON.parse(data.aiMessage);
        setFormulaData(parsed);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleReset = () => {
    setFormulaData(null);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Fórmula copiada al portapapeles");
  };

  const handleCustomize = () => {
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleExampleClick = (example: string) => {
    handleSubmit(example);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-center">
        Consultor de Fórmulas Excel/Sheets
      </h1>
      <FormInput onSubmit={handleSubmit} onReset={handleReset} />
      <Examples onExampleClick={handleExampleClick} />
      {loading && (
        <div className="mt-4">
          <p className="text-center text-blue-600">Procesando solicitud...</p>
        </div>
      )}
      <Results
        formulaData={formulaData}
        onCopy={handleCopy}
        onCustomize={handleCustomize}
      />
      <Modal
        show={showModal}
        onClose={closeModal}
        formulaData={formulaData as AppTypes.FormulaResponse}
      />
    </main>
  );
}