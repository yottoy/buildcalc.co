'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function StuccoCalculator() {
  const [wallArea, setWallArea] = useState<string>('');
  const [coatType, setCoatType] = useState<string>('three');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    
    const area = parseFloat(wallArea);

    if (!area) {
      setError('Please enter wall area');
      return;
    }

    if (area <= 0 || area > 50000) {
      setError('Wall area must be between 0 and 50,000 square feet');
      return;
    }

    // Coverage rates (sq ft per bag)
    const baseCoatCoverage = 25; // Base coat covers ~25 sq ft per 80lb bag
    const finishCoatCoverage = 50; // Finish coat covers ~50 sq ft per bag
    
    let baseBags = 0;
    let finishBags = 0;
    
    if (coatType === 'three') {
      // Three-coat system: scratch, brown, finish
      baseBags = Math.ceil((area / baseCoatCoverage) * 2); // 2 base coats
      finishBags = Math.ceil(area / finishCoatCoverage);
    } else {
      // Two-coat system: base and finish
      baseBags = Math.ceil(area / baseCoatCoverage);
      finishBags = Math.ceil(area / finishCoatCoverage);
    }

    const lath = Math.ceil(area * 1.1); // Add 10% for waste
    const cornerBead = Math.ceil(area / 100) * 10; // Estimate based on area

    setResults([
      { label: 'Base Coat Bags', value: baseBags, unit: '80lb bags', primary: true },
      { label: 'Finish Coat Bags', value: finishBags, unit: '80lb bags' },
      { label: 'Metal Lath', value: lath, unit: 'sq ft' },
      { label: 'Corner Bead', value: cornerBead, unit: 'linear feet' },
    ]);
  };

  const reset = () => {
    setWallArea('');
    setCoatType('three');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Drywall Calculator',
      slug: 'drywall-calculator',
      description: 'Estimate drywall sheets needed for walls and ceilings',
    },
    {
      name: 'Brick Calculator',
      slug: 'brick-calculator',
      description: 'Estimate number of bricks required for walls',
    },
    {
      name: 'Construction Cost Calculator',
      slug: 'construction-cost-calculator',
      description: 'Estimate total construction project costs',
    },
  ];

  const faqs = [
    {
      question: 'What is the difference between 2-coat and 3-coat stucco?',
      answer: 'Three-coat stucco (scratch, brown, finish) is traditional and more durable. Two-coat systems are faster and work well over solid substrates like concrete or CMU blocks.',
    },
    {
      question: 'How thick should stucco be?',
      answer: 'Three-coat stucco is typically 7/8" thick total. Two-coat systems are about 5/8" thick. Each coat is applied in layers with drying time between.',
    },
    {
      question: 'Do I need metal lath?',
      answer: 'Yes, metal lath (wire mesh) is required over wood sheathing to provide a base for the stucco to grip. It\'s not needed over concrete or masonry.',
    },
    {
      question: 'How long does stucco take to dry?',
      answer: 'Each coat needs 24-48 hours to cure before applying the next coat. Total installation takes 5-7 days for a three-coat system.',
    },
  ];

  return (
    <CalculatorLayout
      title="Stucco Calculator"
      description="Calculate stucco materials needed for exterior finishes"
      relatedCalculators={relatedCalculators}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Wall Details</h2>
          
          <InputField
            label="Total Wall Area"
            name="wallArea"
            value={wallArea}
            onChange={setWallArea}
            unit="sq ft"
            placeholder="e.g., 1000"
          />

          <SelectField
            label="Stucco System"
            name="coatType"
            value={coatType}
            onChange={setCoatType}
            options={[
              { value: 'two', label: 'Two-Coat System' },
              { value: 'three', label: 'Three-Coat System (Traditional)' },
            ]}
          />

          <div className="flex gap-4 mt-6">
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
          'Calculate total wall area (length × height)',
          'Subtract area for windows and doors',
          'Choose between 2-coat or 3-coat system',
          'Click Calculate to get materials needed',
          'Order 10% extra for waste',
        ]}
        formula={{
          description: 'Stucco material calculation:',
          equation: 'Base Coat Bags = Area / 25 sq ft per bag\nFinish Coat Bags = Area / 50 sq ft per bag\n(Three-coat uses 2× base coat)',
        }}
        tips={[
          'Apply stucco in temperatures between 40°F and 90°F',
          'Keep fresh stucco moist for 48 hours after application',
          'Use corner beads on all outside corners',
          'Install weep screed at the bottom of walls',
          'Consider synthetic stucco (EIFS) for easier application',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
