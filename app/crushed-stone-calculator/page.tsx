'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function CrushedStoneCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

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
    const tons = (cubicYards * 2700) / 2000;

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Tons', value: tons.toFixed(2), unit: 'tons' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setDepth('');
    setResults(null);
    setError('');
  };

  const faqs = [
    {
      question: 'What is crushed stone used for?',
      answer: 'Crushed stone is used for driveways, road base, concrete aggregate, drainage systems, French drains, paver base, and landscaping. It compacts well and provides excellent drainage due to angular edges.',
    },
    {
      question: 'How deep should crushed stone be?',
      answer: 'Driveways: 4-6 inches. Road base: 6-8 inches. Drainage: 4-6 inches. Paver base: 4-6 inches. Always compact in 2-inch layers for stability.',
    },
    {
      question: 'What size crushed stone should I use?',
      answer: '3/4-inch (#57 stone) is most common for driveways and base layers. #411 (crushed stone with fines) compacts best. #8 (3/8-inch) is used for paver base. Larger 1.5-inch stone is for drainage.',
    },
    {
      question: 'Is crushed stone better than gravel?',
      answer: 'Crushed stone has angular edges that interlock and compact better than round gravel, making it superior for driveways and base layers. Round gravel is better for decorative landscaping and walking surfaces.',
    },
    {
      question: 'How do I compact crushed stone?',
      answer: 'Use a plate compactor for areas under 1,000 sq ft or a roller for larger areas. Compact in 2-inch lifts, making 3-4 passes per layer. Spray with water while compacting for best results.',
    },
  ];

  return (
    <CalculatorLayout
      title="Crushed Stone Calculator"
      description="Calculate crushed stone needed for driveways and base layers"
      relatedCalculators={[
        { name: 'Gravel Cost Calculator', slug: 'gravel-cost-calculator', description: 'Calculate gravel costs' },
        { name: 'Asphalt Calculator', slug: 'asphalt-calculator', description: 'Calculate asphalt for driveways' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
          <InputField label="Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 50" />
          <InputField label="Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 12" />
          <InputField label="Depth" name="depth" value={depth} onChange={setDepth} unit="inches" placeholder="e.g., 4" />
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
        steps={['Measure length and width', 'Determine depth needed', 'Click Calculate']}
        formula={{ description: 'Volume calculation:', equation: 'Volume (cubic yards) = (L × W × D/12) / 27' }}
        tips={['Compact in 2-inch layers', 'Use geotextile fabric for soft soil', 'Grade for proper drainage']}
      />
      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
