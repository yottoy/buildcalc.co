'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function ConcreteCostCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [pricePerYard, setPricePerYard] = useState<string>('150');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    const price = parseFloat(pricePerYard);

    if (!l || !w || !d || !price) {
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

    if (d <= 0 || d > 24) {
      setError('Depth must be between 0 and 24 inches');
      return;
    }

    if (price <= 0 || price > 1000) {
      setError('Price per cubic yard must be between $0 and $1000');
      return;
    }

    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;
    const totalCost = cubicYards * price;
    const bags80lb = Math.ceil(cubicYards * 45); // ~45 80lb bags per cubic yard
    const costPerBag = 5; // Average cost per 80lb bag
    const baggedCost = bags80lb * costPerBag;
    const squareFeet = l * w;
    const costPerSqFt = totalCost / squareFeet;

    setResults([
      { label: 'Total Cost (Ready-Mix)', value: `$${totalCost.toFixed(2)}`, primary: true },
      { label: 'Cubic Yards Needed', value: cubicYards.toFixed(2), unit: 'yd³' },
      { label: 'Cost per Square Foot', value: `$${costPerSqFt.toFixed(2)}`, unit: '/ft²' },
      { label: '80lb Bags Needed', value: bags80lb, unit: 'bags' },
      { label: 'Bagged Concrete Cost', value: `$${baggedCost.toFixed(2)}`, unit: '(approx.)' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setDepth('');
    setPricePerYard('150');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Concrete Steps Calculator',
      slug: 'concrete-steps-calculator',
      description: 'Estimate concrete required for steps and stairs',
    },
    {
      name: 'Concrete Driveway Calculator',
      slug: 'concrete-driveway-calculator',
      description: 'Calculate concrete needed for driveway projects',
    },
    {
      name: 'Construction Cost Calculator',
      slug: 'construction-cost-calculator',
      description: 'Estimate total construction project material costs',
    },
  ];

  const faqs = [
    {
      question: 'How much does concrete cost per cubic yard?',
      answer: 'Concrete typically costs between $125-$175 per cubic yard for ready-mix delivery. Prices vary by location, concrete strength, and delivery distance. The calculator uses $150 as a default.',
    },
    {
      question: 'Should I use ready-mix or bagged concrete?',
      answer: 'For projects over 1 cubic yard, ready-mix concrete is more cost-effective and convenient. For smaller projects, bagged concrete works well but costs more per cubic yard.',
    },
    {
      question: 'Are there additional costs beyond the concrete?',
      answer: 'Yes, consider costs for delivery fees, labor, reinforcement (rebar/wire mesh), forms, finishing tools, and sealer. These can add 30-50% to the total project cost.',
    },
    {
      question: 'How accurate is this cost estimate?',
      answer: 'This calculator provides material cost estimates. Actual costs vary by location, supplier, concrete mix design, and current market conditions. Always get quotes from local suppliers.',
    },
  ];

  return (
    <CalculatorLayout
      title="Concrete Cost Calculator"
      description="Estimate total concrete costs based on project dimensions"
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
            placeholder="e.g., 4"
          />

          <InputField
            label="Price per Cubic Yard"
            name="pricePerYard"
            value={pricePerYard}
            onChange={setPricePerYard}
            unit="$"
            placeholder="e.g., 150"
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
          'Measure the length of your concrete area in feet',
          'Measure the width of your concrete area in feet',
          'Determine the depth/thickness in inches (typically 4-6 inches for slabs)',
          'Enter the price per cubic yard from your local supplier',
          'Click Calculate to get cost estimates',
        ]}
        formula={{
          description: 'Cost calculation for concrete projects:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nTotal Cost = Volume × Price per Cubic Yard',
        }}
        tips={[
          'Get quotes from multiple concrete suppliers for best pricing',
          'Ask about delivery fees and minimum order requirements',
          'Consider concrete strength requirements (3000 PSI for most residential)',
          'Factor in 5-10% extra concrete for waste',
          'Ready-mix concrete has a limited working time (90-120 minutes)',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
