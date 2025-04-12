import React from "react";
export default function Disclaimer() {
    return (
      <div className="max-w-3xl mx-auto mt-12 bg-yellow-50 border border-yellow-300 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-800 mb-2">⚠️ Important Disclaimer</h3>
        <p className="text-sm text-yellow-700">
          This tool is an AI-powered <strong>preliminary</strong> diagnostic aid. It does not replace a certified medical diagnosis.
          Always consult a healthcare provider for confirmation and treatment.
        </p>
      </div>
    );
  }