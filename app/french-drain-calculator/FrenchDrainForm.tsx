'use client';

import { useState } from 'react';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function FrenchDrainForm() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [pipeSize, setPipeSize] = useState<string>('4');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    const pipe = parseFloat(pipeSize);

    if (!l || !w || !d) { setError('Please fill in all fields'); return; }
    if (l <= 0 || l > 500) { setError('Length must be between 0 and 500 feet'); return; }
    if (w <= 0 || w > 10) { setError('Width must be between 0 and 10 feet'); return; }
    if (d <= 0 || d > 48) { setError('Depth must be between 0 and 48 inches'); return; }

    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;
    const pipeLength = l;
    const fabricLength = l + 4;
    const fabricWidth = w + 2;
    const fabricSquareFeet = fabricLength * fabricWidth;
    const tons = (cubicYards * 2700) / 2000;

    setResults([
      { label: 'Gravel Needed', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Gravel Weight', value: tons.toFixed(2), unit: 'tons' },
      { label: `${pipe}" Perforated Pipe`, value: pipeLength.toFixed(0), unit: 'feet' },
      { label: 'Landscape Fabric', value: fabricSquareFeet.toFixed(0), unit: 'ft²' },
      { label: 'Fabric Roll (4ft wide)', value: Math.ceil(fabricLength / 100), unit: 'rolls' },
    ]);
  };

  const reset = () => {
    setLength(''); setWidth(''); setDepth(''); setPipeSize('4');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
        <InputField label="Trench Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 50" />
        <InputField label="Trench Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 1.5" />
        <InputField label="Trench Depth" name="depth" value={depth} onChange={setDepth} unit="inches" placeholder="e.g., 18" />
        <SelectField label="Pipe Size" name="pipeSize" value={pipeSize} onChange={setPipeSize} options={[
          { value: '3', label: '3 inch' }, { value: '4', label: '4 inch' }, { value: '6', label: '6 inch' },
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
