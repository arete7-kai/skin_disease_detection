'use client';

import React, { useState, useEffect } from 'react';

type ResultType = {
  prediction: string;
  confidence: number;
  advice: string;
  error?: string;
};

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultType | null>(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('image', file); 




    try {
      const res = await fetch('http://localhost:5000/upload', {  
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error(`Server responded with status ${res.status}`);

      const data = await res.json();
      setResult(data);
    } catch (error: any) {
      console.error('Upload failed', error);
      setResult({
        prediction: '',
        confidence: 0,
        advice: '',
        error: error.message || 'Unexpected error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md mt-8 space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="w-full border p-2 rounded"
      />

      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          className="w-64 h-auto mx-auto mt-4 rounded-lg shadow"
        />
      )}

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        aria-busy={loading}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? '🧠 Analyzing...' : '📤 Upload & Analyze'}
      </button>

          {result && !result.error && (
      <div className="bg-green-50 border border-green-200 p-4 rounded space-y-1">
        <p className="text-green-800 font-semibold">
          <strong>Prediction:</strong> {result.prediction}
        </p>
        <p className="text-gray-600 text-sm mt-2">
          <strong>Advice:</strong> {result.advice}
        </p>
      </div>
    )}


      {result?.error && (
        <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded">
          ⚠️ <strong>Error:</strong> {result.error}
        </div>
      )}
    </div>
  );
}
