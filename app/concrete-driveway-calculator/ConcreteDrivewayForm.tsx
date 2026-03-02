'use client';

import { useState } from 'react';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function ConcreteDrivewayForm() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('4');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);

    if (!l || !w || !d) { setError('Please fill in all fields'); return; }
    if (l <= 0 || l > 1000 || w <= 0 || w > 100 || d <= 0 || d > 12) {
      setError('Please enter valid dimensions'); return;
    }

    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Cubic Feet', value: cubicFeet.toFixed(0), unit: 'ft³' },
    ]);
  };

  const reset = () => {
    setLength(''); setWidth(''); setDepth('4'); setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
        <InputField label="Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 50" />
        <InputField label="Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 12" />
        <InputField label="Depth" name="depth" value={depth} onChange={setDepth} unit="inches" placeholder="e.g., 4" />
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
