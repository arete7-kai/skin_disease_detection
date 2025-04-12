import React from "react";
export default function SupportedDiseases() {
    const diseases = ["Acne", "Psoriasis", "Eczema", "Herpes", "Syphilis", "HPV", "Fungal infections"];
    return (
      <section className="max-w-2xl mx-auto py-10">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Supported Conditions</h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-700">
          {diseases.map((disease, idx) => (
            <li key={idx} className="bg-blue-50 p-3 rounded shadow-sm">{disease}</li>
          ))}
        </ul>
      </section>
    );
  }