'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function ConcreteDrivewayCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('4');
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

    if (l <= 0 || l > 1000 || w <= 0 || w > 100 || d <= 0 || d > 12) {
      setError('Please enter valid dimensions');
      return;
    }

    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Cubic Feet', value: cubicFeet.toFixed(0), unit: 'ft³' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setDepth('4');
    setResults(null);
    setError('');
  };

  const faqs = [
    {
      question: 'How thick should a concrete driveway be?',
      answer: 'Residential driveways should be 4 inches thick. For heavy vehicles, use 5-6 inches. Always install over 4-6 inches of compacted gravel base.',
    },
    {
      question: 'Do I need rebar in my driveway?',
      answer: 'Wire mesh or rebar is recommended for driveways to prevent cracking. Use 6x6 wire mesh or #3 rebar on 18-inch centers.',
    },
    {
      question: 'How much does a concrete driveway cost per square foot?',
      answer: 'Concrete driveways cost $4-$8 per square foot for materials and installation. Basic 4-inch slabs average $6/sq ft. Decorative finishes like stamping or staining add $2-$4/sq ft.',
    },
    {
      question: 'Is concrete or asphalt better for driveways?',
      answer: 'Concrete lasts 30-40 years vs. asphalt\'s 15-20 years. Concrete costs more upfront but requires less maintenance. Asphalt is better for cold climates with freeze-thaw cycles and can be installed faster.',
    },
    {
      question: 'How long does concrete take to cure?',
      answer: 'Concrete reaches 70% strength in 7 days and full strength in 28 days. Wait 7 days before driving on it, 28 days before parking heavy vehicles like RVs or trucks.',
    },
  ];

  return (
    <CalculatorLayout
      title="Concrete Driveway Calculator"
      description="Calculate concrete needed for driveway projects"
      relatedCalculators={[
        { name: 'Concrete Cost Calculator', slug: 'concrete-cost-calculator', description: 'Estimate concrete costs' },
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
        steps={['Measure driveway length', 'Measure driveway width', 'Determine thickness (4" typical)', 'Click Calculate']}
        formula={{ description: 'Volume calculation:', equation: 'Volume (cubic yards) = (L × W × D/12) / 27' }}
        tips={['Install gravel base first', 'Use expansion joints', 'Slope for drainage', 'Cure for 7 days before driving']}
      />
      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
