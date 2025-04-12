import React from "react";
export default function UploadHistory() {
    const mockHistory = [
      { filename: "lesion1.jpg", date: "2024-03-01" },
      { filename: "rash2.jpg", date: "2024-03-05" },
    ];
  
    return (
      <section className="max-w-2xl mx-auto p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload History</h2>
        <ul className="space-y-2">
          {mockHistory.map((item, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded shadow-sm">
              <p className="text-sm font-medium text-gray-700">{item.filename}</p>
              <p className="text-xs text-gray-500">Uploaded on: {item.date}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  