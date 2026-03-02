'use client';

import { useState } from 'react';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

const dirtTypes: { [key: string]: { name: string; lbsPerCubicYard: number } } = {
  topsoil: { name: 'Topsoil', lbsPerCubicYard: 2000 },
  fill: { name: 'Fill Dirt', lbsPerCubicYard: 2000 },
  clay: { name: 'Clay', lbsPerCubicYard: 2100 },
  compost: { name: 'Compost', lbsPerCubicYard: 1000 },
};

export default function DirtForm() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [dirtType, setDirtType] = useState<string>('topsoil');
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
    const dirt = dirtTypes[dirtType];
    const tons = (cubicYards * dirt.lbsPerCubicYard) / 2000;
    const truckLoads = Math.ceil(cubicYards / 10);

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Tons', value: tons.toFixed(2), unit: 'tons (approx.)' },
      { label: 'Cubic Feet', value: cubicFeet.toFixed(2), unit: 'ft³' },
      { label: 'Truck Loads', value: truckLoads, unit: 'loads' },
    ]);
  };

  const reset = () => {
    setLength(''); setWidth(''); setDepth(''); setDirtType('topsoil');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
        <InputField label="Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 30" />
        <InputField label="Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 20" />
        <InputField label="Depth" name="depth" value={depth} onChange={setDepth} unit="inches" placeholder="e.g., 6" />
        <SelectField label="Dirt Type" name="dirtType" value={dirtType} onChange={setDirtType}
          options={Object.entries(dirtTypes).map(([key, value]) => ({ value: key, label: value.name }))} />
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
