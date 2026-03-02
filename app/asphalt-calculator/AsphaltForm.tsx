'use client';

import { useState } from 'react';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function AsphaltForm() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [pricePerTon, setPricePerTon] = useState<string>('100');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    const price = parseFloat(pricePerTon);

    if (!l || !w || !d) { setError('Please fill in all fields'); return; }
    if (l <= 0 || l > 1000) { setError('Length must be between 0 and 1000 feet'); return; }
    if (w <= 0 || w > 1000) { setError('Width must be between 0 and 1000 feet'); return; }
    if (d <= 0 || d > 12) { setError('Depth must be between 0 and 12 inches'); return; }

    const asphaltDensity = 145;
    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;
    const tons = (cubicFeet * asphaltDensity) / 2000;
    const totalCost = tons * price;
    const sqft = l * w;
    const costPerSqFt = totalCost / sqft;

    setResults([
      { label: 'Tons of Asphalt', value: tons.toFixed(2), unit: 'tons', primary: true },
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³' },
      { label: 'Total Cost', value: `$${totalCost.toFixed(2)}` },
      { label: 'Cost per Sq Ft', value: `$${costPerSqFt.toFixed(2)}`, unit: '/ft²' },
    ]);
  };

  const reset = () => {
    setLength(''); setWidth(''); setDepth(''); setPricePerTon('100');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
        <InputField label="Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 50" />
        <InputField label="Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 12" />
        <InputField label="Depth" name="depth" value={depth} onChange={setDepth} unit="inches" placeholder="e.g., 3" />
        <InputField label="Price per Ton" name="pricePerTon" value={pricePerTon} onChange={setPricePerTon} unit="$" placeholder="e.g., 100" />
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
