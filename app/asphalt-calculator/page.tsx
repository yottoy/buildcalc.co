'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function AsphaltCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [pricePerTon, setPricePerTon] = useState<string>('100');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    const price = parseFloat(pricePerTon);

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

    if (d <= 0 || d > 12) {
      setError('Depth must be between 0 and 12 inches');
      return;
    }

    const asphaltDensity = 145; // lbs per cubic foot
    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;
    const tons = (cubicFeet * asphaltDensity) / 2000;
    const totalCost = tons * price;
    const sqft = l * w;
    const costPerSqFt = totalCost / sqft;

    setResults([
      { label: 'Tons of Asphalt', value: tons.toFixed(2), unit: 'tons', primary: true },
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³' },
      { label: 'Total Cost', value: `$${totalCost.toFixed(2)}` },
      { label: 'Cost per Sq Ft', value: `$${costPerSqFt.toFixed(2)}`, unit: '/ft²' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setDepth('');
    setPricePerTon('100');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Concrete Driveway Calculator',
      slug: 'concrete-driveway-calculator',
      description: 'Calculate concrete needed for driveway projects',
    },
    {
      name: 'Gravel Cost Calculator',
      slug: 'gravel-cost-calculator',
      description: 'Calculate gravel costs for base layers',
    },
    {
      name: 'Crushed Stone Calculator',
      slug: 'crushed-stone-calculator',
      description: 'Calculate crushed stone for driveway base',
    },
  ];

  const faqs = [
    {
      question: 'How much does asphalt cost per ton?',
      answer: 'Asphalt typically costs $85-$150 per ton installed. Prices vary by location, oil prices, and project size. Material-only costs are $40-$80 per ton.',
    },
    {
      question: 'How thick should asphalt be?',
      answer: 'Residential driveways need 2-3 inches of asphalt. Commercial parking lots need 3-4 inches. Always install over a 4-6 inch gravel base.',
    },
    {
      question: 'How long does asphalt last?',
      answer: 'Properly installed and maintained asphalt lasts 15-20 years for residential driveways, 10-15 years for high-traffic areas. Seal coating every 2-3 years extends life.',
    },
    {
      question: 'Can I install asphalt myself?',
      answer: 'DIY asphalt installation is not recommended. It requires specialized equipment (paver, roller) and must be installed hot (300°F). Hire a professional contractor.',
    },
  ];

  return (
    <CalculatorLayout
      title="Asphalt Calculator"
      description="Calculate tons of asphalt needed for driveways and parking lots"
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
            placeholder="e.g., 50"
          />

          <InputField
            label="Width"
            name="width"
            value={width}
            onChange={setWidth}
            unit="feet"
            placeholder="e.g., 12"
          />

          <InputField
            label="Depth"
            name="depth"
            value={depth}
            onChange={setDepth}
            unit="inches"
            placeholder="e.g., 3"
          />

          <InputField
            label="Price per Ton"
            name="pricePerTon"
            value={pricePerTon}
            onChange={setPricePerTon}
            unit="$"
            placeholder="e.g., 100"
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
          'Measure the length of your driveway or parking area',
          'Measure the width of the area',
          'Determine the asphalt depth (2-3 inches for driveways)',
          'Enter the price per ton from your contractor',
          'Click Calculate to get tons and cost',
        ]}
        formula={{
          description: 'Asphalt calculation formula:',
          equation: 'Volume (cubic feet) = Length × Width × (Depth/12)\nWeight (tons) = Volume × 145 lbs/ft³ / 2000',
        }}
        tips={[
          'Install a 4-6 inch gravel base before asphalt',
          'Ensure proper drainage with 1-2% slope',
          'Asphalt must be installed in warm weather (above 50°F)',
          'Avoid driving on new asphalt for 24-48 hours',
          'Seal coat every 2-3 years for longevity',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
