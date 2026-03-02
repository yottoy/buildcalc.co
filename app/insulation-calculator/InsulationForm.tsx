'use client';

import { useState } from 'react';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function InsulationForm() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [insulationType, setInsulationType] = useState<string>('batt');
  const [rValue, setRValue] = useState<string>('R-19');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const w = parseFloat(width);

    if (!l || !w) { setError('Please fill in all fields'); return; }
    if (l <= 0 || l > 1000) { setError('Length must be between 0 and 1000 feet'); return; }
    if (w <= 0 || w > 1000) { setError('Width must be between 0 and 1000 feet'); return; }

    const area = l * w;
    let coverage, unit;

    if (insulationType === 'batt') {
      coverage = Math.ceil(area / 50);
      unit = 'rolls';
    } else if (insulationType === 'blown') {
      coverage = Math.ceil(area / 25);
      unit = 'bags';
    } else {
      coverage = Math.ceil(area / 200);
      unit = 'kits';
    }

    setResults([
      { label: 'Insulation Needed', value: coverage, unit: unit, primary: true },
      { label: 'Area to Insulate', value: area.toFixed(0), unit: 'sq ft' },
      { label: 'R-Value', value: rValue },
    ]);
  };

  const reset = () => {
    setLength(''); setWidth(''); setInsulationType('batt'); setRValue('R-19');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Area Details</h2>
        <InputField label="Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 40" />
        <InputField label="Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 30" />
        <SelectField label="Insulation Type" name="insulationType" value={insulationType} onChange={setInsulationType} options={[
          { value: 'batt', label: 'Batt/Roll' },
          { value: 'blown', label: 'Blown-In' },
          { value: 'spray', label: 'Spray Foam' },
        ]} />
        <SelectField label="R-Value" name="rValue" value={rValue} onChange={setRValue} options={[
          { value: 'R-13', label: 'R-13 (Walls)' },
          { value: 'R-19', label: 'R-19 (Walls/Floors)' },
          { value: 'R-30', label: 'R-30 (Attics)' },
          { value: 'R-38', label: 'R-38 (Attics)' },
          { value: 'R-49', label: 'R-49 (Attics)' },
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
