'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function WoodFenceCalculator() {
  const [length, setLength] = useState<string>('');
  const [height, setHeight] = useState<string>('6');
  const [postSpacing, setPostSpacing] = useState<string>('8');
  const [boardWidth, setBoardWidth] = useState<string>('5.5');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    
    const l = parseFloat(length);
    const h = parseFloat(height);
    const spacing = parseFloat(postSpacing);
    const bWidth = parseFloat(boardWidth);

    if (!l || !h || !spacing || !bWidth) {
      setError('Please fill in all fields');
      return;
    }

    if (l <= 0 || l > 1000) {
      setError('Fence length must be between 0 and 1000 feet');
      return;
    }

    const numPosts = Math.ceil(l / spacing) + 1;
    const numBoards = Math.ceil((l * 12) / bWidth) * h;
    const numRails = Math.ceil(l / 8) * 2; // 2 rails per 8ft section
    const concreteBags = numPosts * 2; // 2 bags per post

    setResults([
      { label: 'Fence Posts', value: numPosts, unit: 'posts', primary: true },
      { label: 'Fence Boards', value: numBoards, unit: 'boards' },
      { label: 'Rails (2x4x8)', value: numRails, unit: 'rails' },
      { label: 'Concrete Bags', value: concreteBags, unit: '50lb bags' },
      { label: 'Nails/Screws', value: Math.ceil(numBoards / 50), unit: 'lbs (approx.)' },
    ]);
  };

  const reset = () => {
    setLength('');
    setHeight('6');
    setPostSpacing('8');
    setBoardWidth('5.5');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Chain Link Fence Calculator',
      slug: 'chain-link-fence-calculator',
      description: 'Estimate chain link fencing materials and posts needed',
    },
    {
      name: 'Fence Post Calculator',
      slug: 'fence-post-calculator',
      description: 'Calculate number of fence posts required for your project',
    },
    {
      name: 'Concrete Cost Calculator',
      slug: 'concrete-cost-calculator',
      description: 'Estimate concrete costs for fence post installation',
    },
  ];

  const faqs = [
    {
      question: 'How far apart should fence posts be?',
      answer: 'Standard fence post spacing is 8 feet on center. For taller fences (over 6 feet) or high-wind areas, use 6-foot spacing for added strength.',
    },
    {
      question: 'What size posts should I use?',
      answer: 'Use 4x4 posts for fences up to 6 feet tall. For taller fences, use 6x6 posts. Corner and gate posts should be one size larger.',
    },
    {
      question: 'How deep should fence posts be buried?',
      answer: 'Bury posts at least 1/3 of their height, or minimum 2 feet deep. In cold climates, dig below the frost line (typically 3-4 feet).',
    },
    {
      question: 'What type of wood is best for fences?',
      answer: 'Cedar and redwood are naturally rot-resistant. Pressure-treated pine is more affordable and works well. All will last 15-20+ years with proper maintenance.',
    },
  ];

  return (
    <CalculatorLayout
      title="Wood Fence Calculator"
      description="Estimate wood fencing materials and posts required"
      relatedCalculators={relatedCalculators}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Fence Details</h2>
          
          <InputField
            label="Fence Length"
            name="length"
            value={length}
            onChange={setLength}
            unit="feet"
            placeholder="e.g., 100"
          />

          <SelectField
            label="Fence Height"
            name="height"
            value={height}
            onChange={setHeight}
            options={[
              { value: '3', label: '3 feet' },
              { value: '4', label: '4 feet' },
              { value: '5', label: '5 feet' },
              { value: '6', label: '6 feet' },
              { value: '8', label: '8 feet' },
            ]}
          />

          <SelectField
            label="Post Spacing"
            name="postSpacing"
            value={postSpacing}
            onChange={setPostSpacing}
            options={[
              { value: '6', label: '6 feet' },
              { value: '8', label: '8 feet' },
              { value: '10', label: '10 feet' },
            ]}
          />

          <SelectField
            label="Board Width"
            name="boardWidth"
            value={boardWidth}
            onChange={setBoardWidth}
            options={[
              { value: '3.5', label: '1x4 (3.5")' },
              { value: '5.5', label: '1x6 (5.5")' },
              { value: '7.25', label: '1x8 (7.25")' },
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
          'Measure the total length of fence needed',
          'Decide on fence height (typically 4-6 feet for privacy)',
          'Choose post spacing (8 feet is standard)',
          'Select board width based on your design',
          'Click Calculate to get materials list',
        ]}
        formula={{
          description: 'Wood fence material calculation:',
          equation: 'Posts = (Length / Spacing) + 1\nBoards = (Length × 12 / Board Width) × Height\nRails = (Length / 8) × 2',
        }}
        tips={[
          'Add 10% extra materials for waste and mistakes',
          'Check local building codes for height restrictions',
          'Mark underground utilities before digging post holes',
          'Use pressure-treated or rot-resistant wood',
          'Apply wood sealer or stain for longer life',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
