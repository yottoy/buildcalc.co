'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function DirtCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [dirtType, setDirtType] = useState<string>('topsoil');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const dirtTypes: { [key: string]: { name: string; lbsPerCubicYard: number } } = {
    topsoil: { name: 'Topsoil', lbsPerCubicYard: 2000 },
    fill: { name: 'Fill Dirt', lbsPerCubicYard: 2000 },
    clay: { name: 'Clay', lbsPerCubicYard: 2100 },
    compost: { name: 'Compost', lbsPerCubicYard: 1000 },
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
    const dirt = dirtTypes[dirtType];
    const tons = (cubicYards * dirt.lbsPerCubicYard) / 2000;
    const truckLoads = Math.ceil(cubicYards / 10); // 10 cubic yards per truck

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Tons', value: tons.toFixed(2), unit: 'tons (approx.)' },
      { label: 'Cubic Feet', value: cubicFeet.toFixed(2), unit: 'ft³' },
      { label: 'Truck Loads', value: truckLoads, unit: 'loads' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setDepth('');
    setDirtType('topsoil');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Sand Calculator',
      slug: 'sand-calculator',
      description: 'Calculate sand needed for construction',
    },
    {
      name: 'Gravel Cost Calculator',
      slug: 'gravel-cost-calculator',
      description: 'Calculate gravel costs for projects',
    },
    {
      name: 'Landscaping Calculator',
      slug: 'landscaping-calculator',
      description: 'Calculate landscaping materials needed',
    },
  ];

  const faqs = [
    {
      question: 'What is the difference between topsoil and fill dirt?',
      answer: 'Topsoil is nutrient-rich surface soil for planting. Fill dirt is subsoil used for raising grade, filling holes, or building foundations. Topsoil costs more but is necessary for growing plants.',
    },
    {
      question: 'How much does dirt weigh?',
      answer: 'Dirt weighs approximately 2,000 lbs per cubic yard when dry. Wet dirt can weigh 2,500+ lbs per cubic yard. Weight varies by composition and moisture content.',
    },
    {
      question: 'How much dirt do I need for raised beds?',
      answer: 'For a 4x8 foot raised bed that is 12 inches deep, you need about 1.2 cubic yards of topsoil or garden soil mix.',
    },
    {
      question: 'Should I compact fill dirt?',
      answer: 'Yes, compact fill dirt in 6-inch layers using a plate compactor or roller. Proper compaction prevents settling and ensures a stable base.',
    },
  ];

  return (
    <CalculatorLayout
      title="Dirt Calculator"
      description="Calculate fill dirt or topsoil needed for landscaping"
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
            placeholder="e.g., 30"
          />

          <InputField
            label="Width"
            name="width"
            value={width}
            onChange={setWidth}
            unit="feet"
            placeholder="e.g., 20"
          />

          <InputField
            label="Depth"
            name="depth"
            value={depth}
            onChange={setDepth}
            unit="inches"
            placeholder="e.g., 6"
          />

          <SelectField
            label="Dirt Type"
            name="dirtType"
            value={dirtType}
            onChange={setDirtType}
            options={Object.entries(dirtTypes).map(([key, value]) => ({
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
          'Select the type of dirt for your project',
          'Click Calculate to get the amount needed',
        ]}
        formula={{
          description: 'Dirt volume calculation:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × ~2000 lbs/yd³ / 2000',
        }}
        tips={[
          'Order 10-15% extra to account for settling',
          'Compact fill dirt in layers for stability',
          'Remove grass and vegetation before adding dirt',
          'Topsoil should be at least 4-6 inches deep for lawns',
          'Test soil pH before planting',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
