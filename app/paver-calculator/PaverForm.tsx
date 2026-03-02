'use client';

import { useState } from 'react';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

const paverSizes: { [key: string]: { name: string; sqft: number } } = {
  '4x8': { name: '4" × 8"', sqft: 32 / 144 },
  '6x6': { name: '6" × 6"', sqft: 36 / 144 },
  '6x9': { name: '6" × 9"', sqft: 54 / 144 },
  '12x12': { name: '12" × 12"', sqft: 1 },
};

export default function PaverForm() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [paverSize, setPaverSize] = useState<string>('4x8');
  const [wasteFactor, setWasteFactor] = useState<string>('10');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');

    const l = parseFloat(length);
    const w = parseFloat(width);
    const waste = parseFloat(wasteFactor) / 100;

    if (!l || !w) {
      setError('Please fill in all fields');
      return;
    }

    if (l <= 0 || l > 1000) {
      setError('Length must be between 0 and 1000 feet');
      return;
    }

    if (w <= 0 || w > 1000) {
      setError('Width must be between 0 and 1000 feet');
      return;
    }

    const area = l * w;
    const paver = paverSizes[paverSize];
    const paversNeeded = Math.ceil((area / paver.sqft) * (1 + waste));

    // Sand base (1 inch deep)
    const sandCubicYards = (l * w * (1 / 12)) / 27;

    // Gravel base (4 inches deep)
    const gravelCubicYards = (l * w * (4 / 12)) / 27;

    setResults([
      { label: 'Pavers Needed', value: paversNeeded.toLocaleString(), unit: 'pavers', primary: true },
      { label: 'Area', value: area.toFixed(0), unit: 'sq ft' },
      { label: 'Sand Base (1")', value: sandCubicYards.toFixed(2), unit: 'yd³' },
      { label: 'Gravel Base (4")', value: gravelCubicYards.toFixed(2), unit: 'yd³' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setPaverSize('4x8');
    setWasteFactor('10');
    setResults(null);
    setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>

        <InputField
          label="Length"
          name="length"
          value={length}
          onChange={setLength}
          unit="feet"
          placeholder="e.g., 20"
        />

        <InputField
          label="Width"
          name="width"
          value={width}
          onChange={setWidth}
          unit="feet"
          placeholder="e.g., 15"
        />

        <SelectField
          label="Paver Size"
          name="paverSize"
          value={paverSize}
          onChange={setPaverSize}
          options={Object.entries(paverSizes).map(([key, value]) => ({
            value: key,
            label: value.name,
          }))}
        />

        <SelectField
          label="Waste Factor"
          name="wasteFactor"
          value={wasteFactor}
          onChange={setWasteFactor}
          options={[
            { value: '5', label: '5%' },
            { value: '10', label: '10%' },
            { value: '15', label: '15%' },
            { value: '20', label: '20%' },
          ]}
        />

        <div className="flex gap-4">
          <CalculatorButton onClick={calculate}>
            Calculate
          </CalculatorButton>
          <CalculatorButton onClick={reset} variant="secondary">
            Reset
          </CalculatorButton>
        </div>
      </div>

      <div>
        {error && <ErrorMessage message={error} />}
        {results && <ResultDisplay results={results} />}
        {results && (
          <button
            onClick={() => window.print()}
            className="mt-4 px-6 py-2 border-2 border-gray-300 hover:border-gray-900 transition-colors no-print"
          >
            Print Results
          </button>
        )}
      </div>
    </div>
  );
}
