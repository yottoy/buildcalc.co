'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function LandscapingCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [materialType, setMaterialType] = useState<string>('mulch');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const materials: { [key: string]: { name: string; lbsPerCubicYard: number } } = {
    mulch: { name: 'Mulch', lbsPerCubicYard: 800 },
    topsoil: { name: 'Topsoil', lbsPerCubicYard: 2000 },
    compost: { name: 'Compost', lbsPerCubicYard: 1000 },
    decorativerock: { name: 'Decorative Rock', lbsPerCubicYard: 2700 },
  };

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);

    if (!l || !w || !d) {
      setError('Please fill in all fields');
      return;
    }

    if (l <= 0 || l > 1000 || w <= 0 || w > 1000 || d <= 0 || d > 24) {
      setError('Please enter valid dimensions');
      return;
    }

    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;
    const material = materials[materialType];
    const tons = (cubicYards * material.lbsPerCubicYard) / 2000;

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Tons', value: tons.toFixed(2), unit: 'tons (approx.)' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setDepth('');
    setMaterialType('mulch');
    setResults(null);
    setError('');
  };

  const faqs = [
    {
      question: 'How deep should mulch be?',
      answer: 'Apply 2-3 inches of mulch for flower beds and around trees. Too much mulch can suffocate plant roots.',
    },
    {
      question: 'How often should I replace mulch?',
      answer: 'Refresh mulch annually. Organic mulch decomposes and needs replacement every 1-2 years.',
    },
  ];

  return (
    <CalculatorLayout
      title="Landscaping Calculator"
      description="Calculate materials for landscaping and garden projects"
      relatedCalculators={[
        { name: 'Dirt Calculator', slug: 'dirt-calculator', description: 'Calculate topsoil needed' },
        { name: 'Sod Calculator', slug: 'sod-calculator', description: 'Calculate sod needed' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Area Details</h2>
          <InputField label="Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 20" />
          <InputField label="Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 10" />
          <InputField label="Depth" name="depth" value={depth} onChange={setDepth} unit="inches" placeholder="e.g., 3" />
          <SelectField
            label="Material Type"
            name="materialType"
            value={materialType}
            onChange={setMaterialType}
            options={Object.entries(materials).map(([key, value]) => ({
              value: key,
              label: value.name,
            }))}
          />
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
      <HowToUse
        steps={['Measure area length and width', 'Determine depth needed', 'Select material type', 'Click Calculate']}
        formula={{ description: 'Volume calculation:', equation: 'Volume (cubic yards) = (L × W × D/12) / 27' }}
        tips={['Use landscape fabric under mulch', 'Edge beds for clean lines', 'Water plants after mulching', 'Keep mulch away from plant stems']}
      />
      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
