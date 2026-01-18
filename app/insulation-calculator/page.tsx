'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function InsulationCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [insulationType, setInsulationType] = useState<string>('batt');
  const [rValue, setRValue] = useState<string>('R-19');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    
    const l = parseFloat(length);
    const w = parseFloat(width);

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
    let coverage, unit;
    
    if (insulationType === 'batt') {
      // Batt insulation: ~50 sq ft per roll
      coverage = Math.ceil(area / 50);
      unit = 'rolls';
    } else if (insulationType === 'blown') {
      // Blown insulation: bags needed
      coverage = Math.ceil(area / 25); // ~25 sq ft per bag
      unit = 'bags';
    } else {
      // Spray foam: kits needed
      coverage = Math.ceil(area / 200); // ~200 sq ft per kit
      unit = 'kits';
    }

    setResults([
      { label: 'Insulation Needed', value: coverage, unit: unit, primary: true },
      { label: 'Area to Insulate', value: area.toFixed(0), unit: 'sq ft' },
      { label: 'R-Value', value: rValue },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setInsulationType('batt');
    setRValue('R-19');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Drywall Calculator',
      slug: 'drywall-calculator',
      description: 'Estimate drywall sheets needed',
    },
    {
      name: 'Construction Cost Calculator',
      slug: 'construction-cost-calculator',
      description: 'Estimate total construction costs',
    },
  ];

  const faqs = [
    {
      question: 'What R-value do I need?',
      answer: 'Walls: R-13 to R-21. Attics: R-30 to R-60. Floors: R-13 to R-30. Higher R-values provide better insulation. Check local building codes.',
    },
    {
      question: 'What type of insulation is best?',
      answer: 'Batt insulation is DIY-friendly and cost-effective. Blown insulation fills gaps better. Spray foam provides best R-value and air sealing but costs more.',
    },
    {
      question: 'Can I install insulation myself?',
      answer: 'Yes, batt insulation is DIY-friendly. Blown insulation requires rental equipment. Spray foam should be professionally installed.',
    },
  ];

  return (
    <CalculatorLayout
      title="Insulation Calculator"
      description="Estimate insulation materials needed for walls and attics"
      relatedCalculators={relatedCalculators}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Area Details</h2>
          
          <InputField
            label="Length"
            name="length"
            value={length}
            onChange={setLength}
            unit="feet"
            placeholder="e.g., 40"
          />

          <InputField
            label="Width"
            name="width"
            value={width}
            onChange={setWidth}
            unit="feet"
            placeholder="e.g., 30"
          />

          <SelectField
            label="Insulation Type"
            name="insulationType"
            value={insulationType}
            onChange={setInsulationType}
            options={[
              { value: 'batt', label: 'Batt/Roll' },
              { value: 'blown', label: 'Blown-In' },
              { value: 'spray', label: 'Spray Foam' },
            ]}
          />

          <SelectField
            label="R-Value"
            name="rValue"
            value={rValue}
            onChange={setRValue}
            options={[
              { value: 'R-13', label: 'R-13 (Walls)' },
              { value: 'R-19', label: 'R-19 (Walls/Floors)' },
              { value: 'R-30', label: 'R-30 (Attics)' },
              { value: 'R-38', label: 'R-38 (Attics)' },
              { value: 'R-49', label: 'R-49 (Attics)' },
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
          'Measure the length of the area to insulate',
          'Measure the width of the area',
          'Select your insulation type',
          'Choose the appropriate R-value',
          'Click Calculate to get materials needed',
        ]}
        formula={{
          description: 'Insulation calculation:',
          equation: 'Area = Length × Width\nMaterials = Area / Coverage per Unit',
        }}
        tips={[
          'Wear protective gear (mask, gloves, long sleeves)',
          'Fill all gaps but don\'t compress insulation',
          'Seal air leaks before insulating',
          'Ensure proper ventilation in attics',
          'Check for moisture issues before insulating',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
