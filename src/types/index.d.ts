declare namespace AppTypes {
    export interface FormulaResponse {
      excelFormula: string;
      googleSheetsFormula: string;
      exampleUsage: string;
      description: string;
    }
  
    export interface ChatRequest {
      message: string;
    }
  }
  
  export {AppTypes};