'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function MaterialCostEstimator() {
  const [quantity, setQuantity] = useState<string>('');
  const [unitCost, setUnitCost] = useState<string>('');
  const [wasteFactor, setWasteFactor] = useState<string>('10');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const q = parseFloat(quantity);
    const cost = parseFloat(unitCost);
    const waste = parseFloat(wasteFactor) / 100;

    if (!q || !cost) {
      setError('Please fill in all fields');
      return;
    }

    if (q <= 0 || cost <= 0) {
      setError('Please enter valid values');
      return;
    }

    const totalQuantity = q * (1 + waste);
    const totalCost = totalQuantity * cost;

    setResults([
      { label: 'Total Cost', value: `$${totalCost.toFixed(2)}`, primary: true },
      { label: 'Quantity Needed', value: totalQuantity.toFixed(2), unit: 'units' },
      { label: 'Waste Amount', value: (totalQuantity - q).toFixed(2), unit: 'units' },
    ]);
  };

  const reset = () => {
    setQuantity('');
    setUnitCost('');
    setWasteFactor('10');
    setResults(null);
    setError('');
  };

  const faqs = [
    {
      question: 'Why add a waste factor?',
      answer: 'Waste factors account for cuts, breakage, and mistakes. 10% is standard for most materials. Use 15-20% for complex projects with many angles or cuts.',
    },
    {
      question: 'What materials need waste factors?',
      answer: 'All construction materials benefit from waste factors: lumber, drywall, flooring, roofing, siding, concrete, bricks, tiles, and more. Even bulk materials like gravel settle and compact.',
    },
    {
      question: 'How do I calculate material cost for a project?',
      answer: 'Measure your project dimensions accurately, calculate quantity needed, add waste factor (typically 10%), then multiply by unit cost. Always get quotes from multiple suppliers for best pricing.',
    },
    {
      question: 'Should I buy extra materials?',
      answer: 'Yes, always order 10-15% extra. This accounts for waste, mistakes, and future repairs. Matching materials later can be difficult due to dye lots, discontinuation, or material changes.',
    },
    {
      question: 'What affects material pricing?',
      answer: 'Material prices vary by location, season, supplier, quantity ordered, delivery distance, and current market conditions. Bulk orders often get discounts. Compare prices from at least 3 suppliers.',
    },
  ];

  return (
    <CalculatorLayout
      title="Material Cost Estimator"
      description="Estimate total material costs for construction projects"
      relatedCalculators={[
        { name: 'Construction Cost Calculator', slug: 'construction-cost-calculator', description: 'Estimate project costs' },
        { name: 'Concrete Cost Calculator', slug: 'concrete-cost-calculator', description: 'Estimate concrete costs' },
      ]}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Material Details</h2>
          <InputField label="Quantity Needed" name="quantity" value={quantity} onChange={setQuantity} placeholder="e.g., 100" />
          <InputField label="Unit Cost" name="unitCost" value={unitCost} onChange={setUnitCost} unit="$" placeholder="e.g., 5.50" />
          <InputField label="Waste Factor" name="wasteFactor" value={wasteFactor} onChange={setWasteFactor} unit="%" placeholder="e.g., 10" />
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
        steps={['Calculate quantity needed', 'Get unit cost from supplier', 'Add waste factor (10% typical)', 'Click Calculate']}
        formula={{ description: 'Cost calculation:', equation: 'Total = Quantity × (1 + Waste%) × Unit Cost' }}
        tips={['Get quotes from multiple suppliers', 'Buy in bulk for discounts', 'Factor in delivery costs', 'Keep receipts for returns']}
      />
      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
