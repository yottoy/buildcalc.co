'use client';

import { useState } from 'react';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

const sandTypes: { [key: string]: { name: string; lbsPerCubicYard: number } } = {
  masonry: { name: 'Masonry Sand', lbsPerCubicYard: 2700 },
  play: { name: 'Play Sand', lbsPerCubicYard: 2600 },
  concrete: { name: 'Concrete Sand', lbsPerCubicYard: 2800 },
  beach: { name: 'Beach Sand', lbsPerCubicYard: 2600 },
};

export default function SandForm() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [sandType, setSandType] = useState<string>('masonry');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);

    if (!l || !w || !d) { setError('Please fill in all fields'); return; }
    if (l <= 0 || l > 1000) { setError('Length must be between 0 and 1000 feet'); return; }
    if (w <= 0 || w > 1000) { setError('Width must be between 0 and 1000 feet'); return; }
    if (d <= 0 || d > 48) { setError('Depth must be between 0 and 48 inches'); return; }

    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;
    const sand = sandTypes[sandType];
    const tons = (cubicYards * sand.lbsPerCubicYard) / 2000;
    const bags50lb = Math.ceil(tons * 40);

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Tons', value: tons.toFixed(2), unit: 'tons' },
      { label: 'Cubic Feet', value: cubicFeet.toFixed(2), unit: 'ft³' },
      { label: '50lb Bags', value: bags50lb, unit: 'bags' },
    ]);
  };

  const reset = () => {
    setLength(''); setWidth(''); setDepth(''); setSandType('masonry');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
        <InputField label="Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 20" />
        <InputField label="Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 10" />
        <InputField label="Depth" name="depth" value={depth} onChange={setDepth} unit="inches" placeholder="e.g., 2" />
        <SelectField label="Sand Type" name="sandType" value={sandType} onChange={setSandType}
          options={Object.entries(sandTypes).map(([key, value]) => ({ value: key, label: value.name }))} />
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
