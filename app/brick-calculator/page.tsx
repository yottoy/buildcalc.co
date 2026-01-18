'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function BrickCalculator() {
  const [length, setLength] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [brickSize, setBrickSize] = useState<string>('standard');
  const [wasteFactor, setWasteFactor] = useState<string>('10');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const brickSizes: { [key: string]: { name: string; perSqFt: number } } = {
    standard: { name: 'Standard (8"×4")', perSqFt: 7 },
    modular: { name: 'Modular (7.6"×3.6")', perSqFt: 7.5 },
    queen: { name: 'Queen (9.6"×2.8")', perSqFt: 6.5 },
    king: { name: 'King (9.6"×2.8")', perSqFt: 5.5 },
  };

  const calculate = () => {
    setError('');
    
    const l = parseFloat(length);
    const h = parseFloat(height);
    const waste = parseFloat(wasteFactor) / 100;

    if (!l || !h) {
      setError('Please fill in all fields');
      return;
    }

    if (l <= 0 || l > 1000) {
      setError('Length must be between 0 and 1000 feet');
      return;
    }

    if (h <= 0 || h > 100) {
      setError('Height must be between 0 and 100 feet');
      return;
    }

    const area = l * h;
    const brick = brickSizes[brickSize];
    const bricksNeeded = Math.ceil(area * brick.perSqFt * (1 + waste));
    const mortarBags = Math.ceil(area / 35); // ~35 sq ft per 80lb bag

    setResults([
      { label: 'Bricks Needed', value: bricksNeeded.toLocaleString(), unit: 'bricks', primary: true },
      { label: 'Wall Area', value: area.toFixed(0), unit: 'sq ft' },
      { label: 'Mortar Bags', value: mortarBags, unit: '80lb bags' },
      { label: 'Pallets', value: Math.ceil(bricksNeeded / 500), unit: 'pallets (approx.)' },
    ]);
  };

  const reset = () => {
    setLength('');
    setHeight('');
    setBrickSize('standard');
    setWasteFactor('10');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Stucco Calculator',
      slug: 'stucco-calculator',
      description: 'Calculate stucco materials for walls',
    },
    {
      name: 'Sand Calculator',
      slug: 'sand-calculator',
      description: 'Calculate sand for mortar mix',
    },
    {
      name: 'Construction Cost Calculator',
      slug: 'construction-cost-calculator',
      description: 'Estimate total construction costs',
    },
  ];

  const faqs = [
    {
      question: 'How many bricks do I need per square foot?',
      answer: 'Standard bricks (8"×4") require about 7 bricks per square foot with mortar joints. Modular bricks need 7.5 per sq ft.',
    },
    {
      question: 'How much mortar do I need?',
      answer: 'One 80lb bag of mortar mix covers approximately 35 square feet of brick wall with standard 3/8" joints.',
    },
    {
      question: 'Should I order extra bricks?',
      answer: 'Yes, order 10-15% extra for waste, cuts, and breakage. Also order extra for future repairs to ensure color match.',
    },
    {
      question: 'How many bricks come on a pallet?',
      answer: 'A standard pallet holds 400-500 bricks depending on brick size and manufacturer. Check with your supplier.',
    },
  ];

  return (
    <CalculatorLayout
      title="Brick Calculator"
      description="Estimate number of bricks required for walls and construction projects"
      relatedCalculators={relatedCalculators}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Wall Dimensions</h2>
          
          <InputField
            label="Wall Length"
            name="length"
            value={length}
            onChange={setLength}
            unit="feet"
            placeholder="e.g., 30"
          />

          <InputField
            label="Wall Height"
            name="height"
            value={height}
            onChange={setHeight}
            unit="feet"
            placeholder="e.g., 8"
          />

          <SelectField
            label="Brick Size"
            name="brickSize"
            value={brickSize}
            onChange={setBrickSize}
            options={Object.entries(brickSizes).map(([key, value]) => ({
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

      <HowToUse
        steps={[
          'Measure the length of your wall in feet',
          'Measure the height of your wall in feet',
          'Select your brick size',
          'Choose a waste factor (10% is standard)',
          'Click Calculate to get materials needed',
        ]}
        formula={{
          description: 'Brick calculation formula:',
          equation: 'Area = Length × Height\nBricks = Area × Bricks per Sq Ft × (1 + Waste Factor)',
        }}
        tips={[
          'Subtract area for windows and doors',
          'Keep bricks dry before installation',
          'Use consistent mortar joint thickness (3/8")',
          'Build brick walls on concrete footings',
          'Install weep holes for drainage',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
