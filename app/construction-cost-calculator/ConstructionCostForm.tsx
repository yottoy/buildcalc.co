'use client';

import { useState } from 'react';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

const projectTypes: { [key: string]: { name: string; materialCostPerSqFt: number; laborHoursPerSqFt: number } } = {
  basic: { name: 'Basic Renovation', materialCostPerSqFt: 15, laborHoursPerSqFt: 0.5 },
  standard: { name: 'Standard Build', materialCostPerSqFt: 25, laborHoursPerSqFt: 0.75 },
  premium: { name: 'Premium Build', materialCostPerSqFt: 40, laborHoursPerSqFt: 1.0 },
  luxury: { name: 'Luxury Build', materialCostPerSqFt: 60, laborHoursPerSqFt: 1.5 },
};

export default function ConstructionCostForm() {
  const [squareFootage, setSquareFootage] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('basic');
  const [laborRate, setLaborRate] = useState<string>('50');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const sqft = parseFloat(squareFootage);
    const rate = parseFloat(laborRate);

    if (!sqft || !rate) { setError('Please fill in all fields'); return; }
    if (sqft <= 0 || sqft > 50000) { setError('Square footage must be between 0 and 50,000'); return; }
    if (rate <= 0 || rate > 500) { setError('Labor rate must be between $0 and $500 per hour'); return; }

    const project = projectTypes[projectType];
    const materialCost = sqft * project.materialCostPerSqFt;
    const laborHours = sqft * project.laborHoursPerSqFt;
    const laborCost = laborHours * rate;
    const totalCost = materialCost + laborCost;
    const costPerSqFt = totalCost / sqft;

    setResults([
      { label: 'Total Estimated Cost', value: `$${totalCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, primary: true },
      { label: 'Material Cost', value: `$${materialCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
      { label: 'Labor Cost', value: `$${laborCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
      { label: 'Cost per Square Foot', value: `$${costPerSqFt.toFixed(2)}`, unit: '/ft²' },
      { label: 'Estimated Labor Hours', value: laborHours.toFixed(1), unit: 'hours' },
    ]);
  };

  const reset = () => {
    setSquareFootage(''); setProjectType('basic'); setLaborRate('50');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Project Details</h2>
        <InputField label="Square Footage" name="squareFootage" value={squareFootage} onChange={setSquareFootage} unit="ft²" placeholder="e.g., 1500" />
        <SelectField label="Project Type" name="projectType" value={projectType} onChange={setProjectType}
          options={Object.entries(projectTypes).map(([key, value]) => ({ value: key, label: value.name }))} />
        <InputField label="Labor Rate" name="laborRate" value={laborRate} onChange={setLaborRate} unit="$/hour" placeholder="e.g., 50" />
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
