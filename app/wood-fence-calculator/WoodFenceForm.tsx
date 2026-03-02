'use client';

import { useState } from 'react';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function WoodFenceForm() {
  const [length, setLength] = useState<string>('');
  const [height, setHeight] = useState<string>('6');
  const [postSpacing, setPostSpacing] = useState<string>('8');
  const [boardWidth, setBoardWidth] = useState<string>('5.5');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const h = parseFloat(height);
    const spacing = parseFloat(postSpacing);
    const bWidth = parseFloat(boardWidth);

    if (!l || !h || !spacing || !bWidth) { setError('Please fill in all fields'); return; }
    if (l <= 0 || l > 1000) { setError('Fence length must be between 0 and 1000 feet'); return; }

    const numPosts = Math.ceil(l / spacing) + 1;
    const numBoards = Math.ceil((l * 12) / bWidth) * h;
    const numRails = Math.ceil(l / 8) * 2;
    const concreteBags = numPosts * 2;

    setResults([
      { label: 'Fence Posts', value: numPosts, unit: 'posts', primary: true },
      { label: 'Fence Boards', value: numBoards, unit: 'boards' },
      { label: 'Rails (2x4x8)', value: numRails, unit: 'rails' },
      { label: 'Concrete Bags', value: concreteBags, unit: '50lb bags' },
      { label: 'Nails/Screws', value: Math.ceil(numBoards / 50), unit: 'lbs (approx.)' },
    ]);
  };

  const reset = () => {
    setLength(''); setHeight('6'); setPostSpacing('8'); setBoardWidth('5.5');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Fence Details</h2>
        <InputField label="Fence Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 100" />
        <SelectField label="Fence Height" name="height" value={height} onChange={setHeight} options={[
          { value: '3', label: '3 feet' }, { value: '4', label: '4 feet' },
          { value: '5', label: '5 feet' }, { value: '6', label: '6 feet' }, { value: '8', label: '8 feet' },
        ]} />
        <SelectField label="Post Spacing" name="postSpacing" value={postSpacing} onChange={setPostSpacing} options={[
          { value: '6', label: '6 feet' }, { value: '8', label: '8 feet' }, { value: '10', label: '10 feet' },
        ]} />
        <SelectField label="Board Width" name="boardWidth" value={boardWidth} onChange={setBoardWidth} options={[
          { value: '3.5', label: '1x4 (3.5")' }, { value: '5.5', label: '1x6 (5.5")' }, { value: '7.25', label: '1x8 (7.25")' },
        ]} />
        <div className="flex gap-4">
          <CalculatorButton onClick={calculate}>Calculate</CalculatorButton>
          <CalculatorButton onClick={reset} variant="secondary">Reset</CalculatorButton>
        </div>
      </div>
      <div>
        {error && <ErrorMessage message={error} />}
        {results && <ResultDisplay results={results} />}
        {results && (
          <button onClick={() => window.print()} className="mt-4 px-6 py-2 border-2 border-gray-300 hover:border-gray-900 transition-colors no-print">
            Print Results
          </button>
        )}
      </div>
    </div>
  );
}
