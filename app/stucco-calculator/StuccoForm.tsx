'use client';

import { useState } from 'react';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function StuccoForm() {
  const [wallArea, setWallArea] = useState<string>('');
  const [coatType, setCoatType] = useState<string>('three');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const area = parseFloat(wallArea);

    if (!area) { setError('Please enter wall area'); return; }
    if (area <= 0 || area > 50000) { setError('Wall area must be between 0 and 50,000 square feet'); return; }

    const baseCoatCoverage = 25;
    const finishCoatCoverage = 50;
    let baseBags = 0;
    let finishBags = 0;

    if (coatType === 'three') {
      baseBags = Math.ceil((area / baseCoatCoverage) * 2);
      finishBags = Math.ceil(area / finishCoatCoverage);
    } else {
      baseBags = Math.ceil(area / baseCoatCoverage);
      finishBags = Math.ceil(area / finishCoatCoverage);
    }

    const lath = Math.ceil(area * 1.1);
    const cornerBead = Math.ceil(area / 100) * 10;

    setResults([
      { label: 'Base Coat Bags', value: baseBags, unit: '80lb bags', primary: true },
      { label: 'Finish Coat Bags', value: finishBags, unit: '80lb bags' },
      { label: 'Metal Lath', value: lath, unit: 'sq ft' },
      { label: 'Corner Bead', value: cornerBead, unit: 'linear feet' },
    ]);
  };

  const reset = () => {
    setWallArea(''); setCoatType('three'); setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Wall Details</h2>
        <InputField label="Total Wall Area" name="wallArea" value={wallArea} onChange={setWallArea} unit="sq ft" placeholder="e.g., 1000" />
        <SelectField label="Stucco System" name="coatType" value={coatType} onChange={setCoatType} options={[
          { value: 'two', label: 'Two-Coat System' },
          { value: 'three', label: 'Three-Coat System (Traditional)' },
        ]} />
        <div className="flex gap-4 mt-6">
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
