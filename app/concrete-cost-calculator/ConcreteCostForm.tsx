'use client';

import { useState } from 'react';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function ConcreteCostForm() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [pricePerYard, setPricePerYard] = useState<string>('150');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    const price = parseFloat(pricePerYard);

    if (!l || !w || !d || !price) { setError('Please fill in all fields'); return; }
    if (l <= 0 || l > 1000) { setError('Length must be between 0 and 1000 feet'); return; }
    if (w <= 0 || w > 1000) { setError('Width must be between 0 and 1000 feet'); return; }
    if (d <= 0 || d > 24) { setError('Depth must be between 0 and 24 inches'); return; }
    if (price <= 0 || price > 1000) { setError('Price per cubic yard must be between $0 and $1000'); return; }

    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;
    const totalCost = cubicYards * price;
    const bags80lb = Math.ceil(cubicYards * 45);
    const costPerBag = 5;
    const baggedCost = bags80lb * costPerBag;
    const squareFeet = l * w;
    const costPerSqFt = totalCost / squareFeet;

    setResults([
      { label: 'Total Cost (Ready-Mix)', value: `$${totalCost.toFixed(2)}`, primary: true },
      { label: 'Cubic Yards Needed', value: cubicYards.toFixed(2), unit: 'yd³' },
      { label: 'Cost per Square Foot', value: `$${costPerSqFt.toFixed(2)}`, unit: '/ft²' },
      { label: '80lb Bags Needed', value: bags80lb, unit: 'bags' },
      { label: 'Bagged Concrete Cost', value: `$${baggedCost.toFixed(2)}`, unit: '(approx.)' },
    ]);
  };

  const reset = () => {
    setLength(''); setWidth(''); setDepth(''); setPricePerYard('150');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
        <InputField label="Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 20" />
        <InputField label="Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 10" />
        <InputField label="Depth" name="depth" value={depth} onChange={setDepth} unit="inches" placeholder="e.g., 4" />
        <InputField label="Price per Cubic Yard" name="pricePerYard" value={pricePerYard} onChange={setPricePerYard} unit="$" placeholder="e.g., 150" />
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
