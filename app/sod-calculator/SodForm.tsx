'use client';

import { useState } from 'react';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function SodForm() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [pricePerSqFt, setPricePerSqFt] = useState<string>('0.35');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const w = parseFloat(width);
    const price = parseFloat(pricePerSqFt);

    if (!l || !w) { setError('Please fill in all fields'); return; }
    if (l <= 0 || l > 1000) { setError('Length must be between 0 and 1000 feet'); return; }
    if (w <= 0 || w > 1000) { setError('Width must be between 0 and 1000 feet'); return; }

    const area = l * w;
    const areaWithWaste = area * 1.05;
    const rolls = Math.ceil(areaWithWaste / 10);
    const pallets = Math.ceil(areaWithWaste / 450);
    const totalCost = areaWithWaste * price;
    const topsoilCubicYards = (l * w * (2 / 12)) / 27;

    setResults([
      { label: 'Sod Needed', value: Math.ceil(areaWithWaste).toLocaleString(), unit: 'sq ft', primary: true },
      { label: 'Sod Rolls', value: rolls, unit: "rolls (2'×5')" },
      { label: 'Pallets', value: pallets, unit: 'pallets' },
      { label: 'Total Cost', value: `$${totalCost.toFixed(2)}` },
      { label: 'Topsoil (2")', value: topsoilCubicYards.toFixed(2), unit: 'yd³' },
    ]);
  };

  const reset = () => {
    setLength(''); setWidth(''); setPricePerSqFt('0.35');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Lawn Dimensions</h2>
        <InputField label="Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 50" />
        <InputField label="Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 30" />
        <InputField label="Price per Sq Ft" name="pricePerSqFt" value={pricePerSqFt} onChange={setPricePerSqFt} unit="$" placeholder="e.g., 0.35" />
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
