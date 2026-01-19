'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function PeaGravelCalculator() {
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
    const tons = (cubicYards * 2600) / 2000;

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
      question: 'What is pea gravel used for?',
      answer: 'Pea gravel is ideal for walkways, patios, playgrounds, driveways, landscaping, drainage, and around pools. Its smooth, rounded stones are comfortable to walk on and gentle on bare feet.',
    },
    {
      question: 'How deep should pea gravel be?',
      answer: 'Use 2-3 inches for walkways and patios. For playgrounds, use 9-12 inches for proper cushioning and safety. Driveways need 4-6 inches over compacted base.',
    },
    {
      question: 'What size is pea gravel?',
      answer: 'Pea gravel stones are typically 1/4 to 3/8 inch in diameter, about the size of a pea. This small, uniform size makes it comfortable to walk on and easy to spread.',
    },
    {
      question: 'Do I need landscape fabric under pea gravel?',
      answer: 'Yes, always install landscape fabric or weed barrier under pea gravel. This prevents weeds from growing through and keeps gravel from sinking into soil. Use commercial-grade fabric for durability.',
    },
    {
      question: 'How much does pea gravel cost?',
      answer: 'Pea gravel costs $30-$60 per ton or $35-$55 per cubic yard depending on location and supplier. Bulk delivery is more economical than bags for projects over 1 cubic yard.',
    },
  ];

  return (
    <CalculatorLayout
      title="Pea Gravel Calculator"
      description="Estimate pea gravel required for landscaping"
      relatedCalculators={[
        { name: 'Gravel Cost Calculator', slug: 'gravel-cost-calculator', description: 'Calculate gravel costs' },
        { name: 'Sand Calculator', slug: 'sand-calculator', description: 'Calculate sand needed' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
          <InputField label="Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 20" />
          <InputField label="Width" name="width" value={width} onChange={setWidth} unit="feet" placeholder="e.g., 10" />
          <InputField label="Depth" name="depth" value={depth} onChange={setDepth} unit="inches" placeholder="e.g., 3" />
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
        steps={['Measure length and width', 'Determine depth (2-3 inches typical)', 'Click Calculate']}
        formula={{ description: 'Volume calculation:', equation: 'Volume (cubic yards) = (L × W × D/12) / 27' }}
        tips={['Use landscape fabric underneath', 'Compact base before adding gravel', 'Add edging to contain gravel']}
      />
      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
