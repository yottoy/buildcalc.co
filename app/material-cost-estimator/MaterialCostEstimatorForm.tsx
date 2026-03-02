'use client';

import { useState } from 'react';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function MaterialCostEstimatorForm() {
  const [quantity, setQuantity] = useState<string>('');
  const [unitCost, setUnitCost] = useState<string>('');
  const [wasteFactor, setWasteFactor] = useState<string>('10');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const q = parseFloat(quantity);
    const cost = parseFloat(unitCost);
    const waste = parseFloat(wasteFactor) / 100;

    if (!q || !cost) { setError('Please fill in all fields'); return; }
    if (q <= 0 || cost <= 0) { setError('Please enter valid values'); return; }

    const totalQuantity = q * (1 + waste);
    const totalCost = totalQuantity * cost;

    setResults([
      { label: 'Total Cost', value: `$${totalCost.toFixed(2)}`, primary: true },
      { label: 'Quantity Needed', value: totalQuantity.toFixed(2), unit: 'units' },
      { label: 'Waste Amount', value: (totalQuantity - q).toFixed(2), unit: 'units' },
    ]);
  };

  const reset = () => {
    setQuantity(''); setUnitCost(''); setWasteFactor('10');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Material Details</h2>
        <InputField label="Quantity Needed" name="quantity" value={quantity} onChange={setQuantity} placeholder="e.g., 100" />
        <InputField label="Unit Cost" name="unitCost" value={unitCost} onChange={setUnitCost} unit="$" placeholder="e.g., 5.50" />
        <InputField label="Waste Factor" name="wasteFactor" value={wasteFactor} onChange={setWasteFactor} unit="%" placeholder="e.g., 10" />
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
