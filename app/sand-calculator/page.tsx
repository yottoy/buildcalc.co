'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function SandCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [sandType, setSandType] = useState<string>('masonry');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const sandTypes: { [key: string]: { name: string; lbsPerCubicYard: number } } = {
    masonry: { name: 'Masonry Sand', lbsPerCubicYard: 2700 },
    play: { name: 'Play Sand', lbsPerCubicYard: 2600 },
    concrete: { name: 'Concrete Sand', lbsPerCubicYard: 2800 },
    beach: { name: 'Beach Sand', lbsPerCubicYard: 2600 },
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

    if (l <= 0 || l > 1000) {
      setError('Length must be between 0 and 1000 feet');
      return;
    }

    if (w <= 0 || w > 1000) {
      setError('Width must be between 0 and 1000 feet');
      return;
    }

    if (d <= 0 || d > 48) {
      setError('Depth must be between 0 and 48 inches');
      return;
    }

    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;
    const sand = sandTypes[sandType];
    const tons = (cubicYards * sand.lbsPerCubicYard) / 2000;
    const bags50lb = Math.ceil(tons * 40); // 40 bags per ton

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Tons', value: tons.toFixed(2), unit: 'tons' },
      { label: 'Cubic Feet', value: cubicFeet.toFixed(2), unit: 'ft³' },
      { label: '50lb Bags', value: bags50lb, unit: 'bags' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setDepth('');
    setSandType('masonry');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Gravel Cost Calculator',
      slug: 'gravel-cost-calculator',
      description: 'Calculate gravel costs for projects',
    },
    {
      name: 'Dirt Calculator',
      slug: 'dirt-calculator',
      description: 'Calculate fill dirt or topsoil needed',
    },
    {
      name: 'Paver Calculator',
      slug: 'paver-calculator',
      description: 'Calculate pavers needed with sand base',
    },
  ];

  const faqs = [
    {
      question: 'What type of sand should I use?',
      answer: 'Masonry sand for paver base and mortar. Concrete sand for concrete mix. Play sand for sandboxes. Beach sand for landscaping. Each has different grain sizes and uses.',
    },
    {
      question: 'How much does sand weigh?',
      answer: 'Sand weighs 2,600-2,800 lbs per cubic yard depending on type and moisture. Wet sand weighs more than dry sand.',
    },
    {
      question: 'How deep should sand be for pavers?',
      answer: 'Use 1 inch of sand for paver base. Too much sand (over 1.5 inches) causes pavers to shift. Install over 4-6 inches of compacted gravel.',
    },
    {
      question: 'Should I buy bulk or bagged sand?',
      answer: 'For projects over 1 cubic yard, bulk sand delivered by truck is more cost-effective. For small projects, bagged sand is convenient.',
    },
  ];

  return (
    <CalculatorLayout
      title="Sand Calculator"
      description="Calculate sand needed for construction and landscaping"
      relatedCalculators={relatedCalculators}
    >
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
            placeholder="e.g., 10"
          />

          <InputField
            label="Depth"
            name="depth"
            value={depth}
            onChange={setDepth}
            unit="inches"
            placeholder="e.g., 2"
          />

          <SelectField
            label="Sand Type"
            name="sandType"
            value={sandType}
            onChange={setSandType}
            options={Object.entries(sandTypes).map(([key, value]) => ({
              value: key,
              label: value.name,
            }))}
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

      <HowToUse
        steps={[
          'Measure the length of your area in feet',
          'Measure the width of your area in feet',
          'Determine the depth needed in inches',
          'Select the type of sand for your project',
          'Click Calculate to get the amount needed',
        ]}
        formula={{
          description: 'Sand volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × Sand Density / 2000',
        }}
        tips={[
          'Compact sand base before installing pavers',
          'Order 5-10% extra for waste and settling',
          'Wet sand is easier to compact and level',
          'Use landscape fabric under sand to prevent weed growth',
          'Store bagged sand in a dry location',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
