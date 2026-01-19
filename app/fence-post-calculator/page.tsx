'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function FencePostCalculator() {
  const [length, setLength] = useState<string>('');
  const [spacing, setSpacing] = useState<string>('8');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const s = parseFloat(spacing);

    if (!l || !s) {
      setError('Please fill in all fields');
      return;
    }

    if (l <= 0 || l > 1000) {
      setError('Length must be between 0 and 1000 feet');
      return;
    }

    const numPosts = Math.ceil(l / s) + 1;
    const concreteBags = numPosts * 2; // 2 bags per post

    setResults([
      { label: 'Fence Posts', value: numPosts, unit: 'posts', primary: true },
      { label: 'Concrete Bags', value: concreteBags, unit: '50lb bags' },
    ]);
  };

  const reset = () => {
    setLength('');
    setSpacing('8');
    setResults(null);
    setError('');
  };

  const faqs = [
    {
      question: 'How far apart should fence posts be?',
      answer: 'Standard spacing is 8 feet for wood fences, 10 feet for chain link, 6-8 feet for vinyl. Closer spacing provides more strength. Use 6-foot spacing for fences over 6 feet tall or in high-wind areas.',
    },
    {
      question: 'How deep should fence posts be buried?',
      answer: 'Bury posts at least 1/3 of their height, or minimum 2 feet deep for 6-foot fences. In cold climates, go below frost line (typically 3-4 feet). Corner and gate posts need extra depth.',
    },
    {
      question: 'What size fence posts should I use?',
      answer: 'Use 4x4 posts for fences up to 6 feet tall. For 8-foot fences, use 6x6 posts. Corner posts and gate posts should be one size larger than line posts for extra strength.',
    },
    {
      question: 'Should I use pressure-treated posts?',
      answer: 'Yes, always use pressure-treated lumber rated for ground contact (.40 or higher retention). Cedar and redwood naturally resist rot but cost more. Treated posts last 20-30 years.',
    },
    {
      question: 'How much concrete do I need per post?',
      answer: 'Use 2 bags of 50lb concrete mix per post for standard installations. For larger 6x6 posts or loose soil, use 3 bags. Mix to a thick consistency and tamp around post.',
    },
  ];

  return (
    <CalculatorLayout
      title="Fence Post Calculator"
      description="Calculate number of fence posts required for your project"
      relatedCalculators={[
        { name: 'Wood Fence Calculator', slug: 'wood-fence-calculator', description: 'Calculate wood fence materials' },
        { name: 'Chain Link Fence Calculator', slug: 'chain-link-fence-calculator', description: 'Calculate chain link materials' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Fence Details</h2>
          <InputField label="Fence Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 100" />
          <InputField label="Post Spacing" name="spacing" value={spacing} onChange={setSpacing} unit="feet" placeholder="e.g., 8" />
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
        steps={['Measure total fence length', 'Determine post spacing', 'Click Calculate']}
        formula={{ description: 'Post calculation:', equation: 'Posts = (Length / Spacing) + 1' }}
        tips={['Use 4x4 posts for 6\' fences', 'Set posts in concrete', 'Check posts are plumb', 'Let concrete cure 24-48 hours']}
      />
      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
