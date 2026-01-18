'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function SodCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [pricePerSqFt, setPricePerSqFt] = useState<string>('0.35');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    
    const l = parseFloat(length);
    const w = parseFloat(width);
    const price = parseFloat(pricePerSqFt);

    if (!l || !w) {
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

    const area = l * w;
    const areaWithWaste = area * 1.05; // 5% waste
    const rolls = Math.ceil(areaWithWaste / 10); // 10 sq ft per roll
    const pallets = Math.ceil(areaWithWaste / 450); // 450 sq ft per pallet
    const totalCost = areaWithWaste * price;
    
    // Topsoil needed (2 inches)
    const topsoilCubicYards = (l * w * (2 / 12)) / 27;

    setResults([
      { label: 'Sod Needed', value: Math.ceil(areaWithWaste).toLocaleString(), unit: 'sq ft', primary: true },
      { label: 'Sod Rolls', value: rolls, unit: 'rolls (2\'×5\')' },
      { label: 'Pallets', value: pallets, unit: 'pallets' },
      { label: 'Total Cost', value: `$${totalCost.toFixed(2)}` },
      { label: 'Topsoil (2")', value: topsoilCubicYards.toFixed(2), unit: 'yd³' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setPricePerSqFt('0.35');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Dirt Calculator',
      slug: 'dirt-calculator',
      description: 'Calculate topsoil needed for sod',
    },
    {
      name: 'Landscaping Calculator',
      slug: 'landscaping-calculator',
      description: 'Calculate landscaping materials',
    },
    {
      name: 'Sand Calculator',
      slug: 'sand-calculator',
      description: 'Calculate sand for leveling',
    },
  ];

  const faqs = [
    {
      question: 'How much does sod cost?',
      answer: 'Sod costs $0.30-$0.80 per square foot depending on grass type and location. Premium grasses like Zoysia cost more than standard fescue or bluegrass.',
    },
    {
      question: 'How big is a roll of sod?',
      answer: 'Standard sod rolls are 2 feet × 5 feet (10 square feet). Some suppliers sell 4×4 foot squares or larger rolls.',
    },
    {
      question: 'Do I need to add topsoil before sod?',
      answer: 'Yes, add 2-4 inches of quality topsoil to ensure good drainage and root growth. Grade the area to slope away from buildings.',
    },
    {
      question: 'How long does sod take to establish?',
      answer: 'Sod roots in 2-3 weeks with proper watering. Avoid heavy traffic for 3-4 weeks. Full establishment takes 6-8 weeks.',
    },
  ];

  return (
    <CalculatorLayout
      title="Sod Calculator"
      description="Estimate sod required for lawn installation"
      relatedCalculators={relatedCalculators}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Lawn Dimensions</h2>
          
          <InputField
            label="Length"
            name="length"
            value={length}
            onChange={setLength}
            unit="feet"
            placeholder="e.g., 50"
          />

          <InputField
            label="Width"
            name="width"
            value={width}
            onChange={setWidth}
            unit="feet"
            placeholder="e.g., 30"
          />

          <InputField
            label="Price per Sq Ft"
            name="pricePerSqFt"
            value={pricePerSqFt}
            onChange={setPricePerSqFt}
            unit="$"
            placeholder="e.g., 0.35"
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
          'Measure the length of your lawn area',
          'Measure the width of your lawn area',
          'Get price per square foot from supplier',
          'Click Calculate to get sod needed',
          'Order 5% extra for waste and irregular shapes',
        ]}
        formula={{
          description: 'Sod calculation formula:',
          equation: 'Area = Length × Width\nSod Needed = Area × 1.05 (5% waste)\nRolls = Sod Needed / 10 sq ft per roll',
        }}
        tips={[
          'Install sod within 24 hours of delivery',
          'Water immediately after installation',
          'Water daily for first 2 weeks',
          'Avoid walking on new sod for 3 weeks',
          'Mow when grass reaches 3-4 inches',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
