'use client';

import { useState } from 'react';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function DrywallForm() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('8');
  const [sheetSize, setSheetSize] = useState<string>('4x8');
  const [wasteFactor, setWasteFactor] = useState<string>('10');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const waste = parseFloat(wasteFactor) / 100;

    if (!l || !w || !h) {
      setError('Please fill in all fields');
      return;
    }
    if (l <= 0 || l > 1000) { setError('Length must be between 0 and 1000 feet'); return; }
    if (w <= 0 || w > 1000) { setError('Width must be between 0 and 1000 feet'); return; }

    const perimeter = 2 * (l + w);
    const wallArea = perimeter * h;
    const ceilingArea = l * w;
    const totalArea = wallArea + ceilingArea;
    const sheetSqFt = sheetSize === '4x8' ? 32 : sheetSize === '4x10' ? 40 : 48;
    const sheets = Math.ceil((totalArea * (1 + waste)) / sheetSqFt);
    const screwsLbs = Math.ceil(sheets * 0.5);
    const tapeRolls = Math.ceil(totalArea / 500);
    const compoundGallons = Math.ceil(totalArea / 100);

    setResults([
      { label: 'Drywall Sheets', value: sheets, unit: 'sheets', primary: true },
      { label: 'Total Area', value: totalArea.toFixed(0), unit: 'sq ft' },
      { label: 'Drywall Screws', value: screwsLbs, unit: 'lbs' },
      { label: 'Joint Tape', value: tapeRolls, unit: 'rolls' },
      { label: 'Joint Compound', value: compoundGallons, unit: 'gallons' },
    ]);
  };

  const reset = () => {
    setLength(''); setWidth(''); setHeight('8'); setSheetSize('4x8');
    setWasteFactor('10'); setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Room Dimensions</h2>
        <InputField label="Room Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 20" />
        <InputField label="Room Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 15" />
        <SelectField label="Wall Height" name="height" value={height} onChange={setHeight} options={[
          { value: '8', label: '8 feet' }, { value: '9', label: '9 feet' },
          { value: '10', label: '10 feet' }, { value: '12', label: '12 feet' },
        ]} />
        <SelectField label="Sheet Size" name="sheetSize" value={sheetSize} onChange={setSheetSize} options={[
          { value: '4x8', label: '4x8 feet (32 sq ft)' },
          { value: '4x10', label: '4x10 feet (40 sq ft)' },
          { value: '4x12', label: '4x12 feet (48 sq ft)' },
        ]} />
        <SelectField label="Waste Factor" name="wasteFactor" value={wasteFactor} onChange={setWasteFactor} options={[
          { value: '5', label: '5%' }, { value: '10', label: '10%' },
          { value: '15', label: '15%' }, { value: '20', label: '20%' },
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
