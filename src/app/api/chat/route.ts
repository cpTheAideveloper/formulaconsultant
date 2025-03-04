import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/utils/openai";
import type { AppTypes } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const { message } = (await request.json()) as AppTypes.ChatRequest;

    // System message ajustado al formato requerido por la aplicación
    const systemContent = `
      Eres un asistente que analiza la solicitud de un usuario sobre fórmulas o automatizaciones en Excel y Google Sheets.
      Devuelve tu respuesta en el siguiente formato JSON:
      {
        "excelFormula": "Fórmula de Excel",
        "googleSheetsFormula": "Fórmula de Google Sheets",
        "exampleUsage": "Ejemplo práctico de la fórmula",
        "description": "Cómo utilizar la fórmula"
      }
    `;

    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemContent },
        { role: "user", content: message },
      ],
    });

    const aiMessage = chatResponse.choices[0].message?.content || "";

    return NextResponse.json({ aiMessage });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}