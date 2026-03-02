'use client';

import { useState } from 'react';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function FencePostForm() {
  const [length, setLength] = useState<string>('');
  const [spacing, setSpacing] = useState<string>('8');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const s = parseFloat(spacing);

    if (!l || !s) { setError('Please fill in all fields'); return; }
    if (l <= 0 || l > 1000) { setError('Length must be between 0 and 1000 feet'); return; }

    const numPosts = Math.ceil(l / s) + 1;
    const concreteBags = numPosts * 2;

    setResults([
      { label: 'Fence Posts', value: numPosts, unit: 'posts', primary: true },
      { label: 'Concrete Bags', value: concreteBags, unit: '50lb bags' },
    ]);
  };

  const reset = () => {
    setLength(''); setSpacing('8'); setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Fence Details</h2>
        <InputField label="Fence Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 100" />
        <InputField label="Post Spacing" name="spacing" value={spacing} onChange={setSpacing} unit="feet" placeholder="e.g., 8" />
        <div className="flex gap-4">
          <CalculatorButton onClick={calculate}>Calculate</CalculatorButton>
          <CalculatorButton onClick={reset} variant="secondary">Reset</CalculatorButton>
        </div>
      </div>
      <div>
        {error && <ErrorMessage message={error} />}
        {results && <ResultDisplay results={results} />}
      </div>
    </div>
  );
}
