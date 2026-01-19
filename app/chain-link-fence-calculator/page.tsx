'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function ChainLinkFenceCalculator() {
  const [length, setLength] = useState<string>('');
  const [height, setHeight] = useState<string>('4');
  const [postSpacing, setPostSpacing] = useState<string>('10');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const h = parseFloat(height);
    const spacing = parseFloat(postSpacing);

    if (!l || !h || !spacing) {
      setError('Please fill in all fields');
      return;
    }

    if (l <= 0 || l > 1000) {
      setError('Length must be between 0 and 1000 feet');
      return;
    }

    const numPosts = Math.ceil(l / spacing) + 1;
    const fencingLinearFeet = l;
    const topRailLinearFeet = l;

    setResults([
      { label: 'Fence Posts', value: numPosts, unit: 'posts', primary: true },
      { label: 'Chain Link Fabric', value: fencingLinearFeet, unit: `linear feet (${h}' height)` },
      { label: 'Top Rail', value: topRailLinearFeet, unit: 'linear feet' },
    ]);
  };

  const reset = () => {
    setLength('');
    setHeight('4');
    setPostSpacing('10');
    setResults(null);
    setError('');
  };

  const faqs = [
    {
      question: 'How far apart should chain link fence posts be?',
      answer: 'Standard spacing is 10 feet on center for residential fences. For taller fences (over 6 feet) or high-wind areas, use 8-foot spacing for added strength and stability.',
    },
    {
      question: 'What size posts do I need?',
      answer: 'Use 2-3/8" line posts and 2-7/8" terminal (corner/end/gate) posts for residential fences up to 6 feet. For commercial or taller fences, use 2-1/2" line posts and 3" terminal posts.',
    },
    {
      question: 'How much does chain link fence cost?',
      answer: 'Chain link fence costs $8-$15 per linear foot installed. Materials only run $3-$8 per foot. 4-foot fence is cheaper than 6-foot. Vinyl-coated chain link costs $2-$3 more per foot.',
    },
    {
      question: 'How deep should chain link fence posts be buried?',
      answer: 'Bury line posts 2 feet deep. Terminal posts (corners, ends, gates) should be 3 feet deep. In frost areas, go below frost line. Use concrete for all posts.',
    },
    {
      question: 'Can I install chain link fence myself?',
      answer: 'Yes, chain link is DIY-friendly with basic tools: post hole digger, level, come-along or fence puller, and wrenches. Most homeowners can install 100 feet in a weekend. Rent a power auger for post holes.',
    },
  ];

  return (
    <CalculatorLayout
      title="Chain Link Fence Calculator"
      description="Estimate chain link fencing materials and posts needed"
      relatedCalculators={[
        { name: 'Wood Fence Calculator', slug: 'wood-fence-calculator', description: 'Calculate wood fence materials' },
        { name: 'Fence Post Calculator', slug: 'fence-post-calculator', description: 'Calculate fence posts' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Fence Details</h2>
          <InputField label="Fence Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 100" />
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
            ]}
          />
          <SelectField
            label="Post Spacing"
            name="postSpacing"
            value={postSpacing}
            onChange={setPostSpacing}
            options={[
              { value: '8', label: '8 feet' },
              { value: '10', label: '10 feet' },
            ]}
          />
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
        steps={['Measure total fence length', 'Choose fence height', 'Select post spacing', 'Click Calculate']}
        formula={{ description: 'Material calculation:', equation: 'Posts = (Length / Spacing) + 1' }}
        tips={['Bury posts 1/3 of height', 'Use concrete for all posts', 'Stretch fabric tightly', 'Add tension wire at bottom']}
      />
      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
