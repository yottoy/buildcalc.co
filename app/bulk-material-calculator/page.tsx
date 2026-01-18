'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function BulkMaterialCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [materialType, setMaterialType] = useState<string>('gravel');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const materialDensities: { [key: string]: { name: string; lbsPerCubicYard: number } } = {
    gravel: { name: 'Gravel', lbsPerCubicYard: 2700 },
    sand: { name: 'Sand', lbsPerCubicYard: 2600 },
    topsoil: { name: 'Topsoil', lbsPerCubicYard: 2000 },
    mulch: { name: 'Mulch', lbsPerCubicYard: 800 },
    stone: { name: 'Crushed Stone', lbsPerCubicYard: 2700 },
    dirt: { name: 'Fill Dirt', lbsPerCubicYard: 2000 },
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
    const material = materialDensities[materialType];
    const tons = (cubicYards * material.lbsPerCubicYard) / 2000;
    const truckLoads = Math.ceil(cubicYards / 10); // Typical dump truck holds ~10 cubic yards

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Tons', value: tons.toFixed(2), unit: 'tons' },
      { label: 'Cubic Feet', value: cubicFeet.toFixed(2), unit: 'ft³' },
      { label: 'Truck Loads', value: truckLoads, unit: 'loads (approx.)' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setDepth('');
    setMaterialType('gravel');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Gravel Cost Calculator',
      slug: 'gravel-cost-calculator',
      description: 'Calculate gravel costs based on project requirements',
    },
    {
      name: 'Sand Calculator',
      slug: 'sand-calculator',
      description: 'Calculate sand needed for construction and landscaping',
    },
    {
      name: 'Dirt Calculator',
      slug: 'dirt-calculator',
      description: 'Calculate fill dirt or topsoil needed for landscaping',
    },
  ];

  const faqs = [
    {
      question: 'What materials can I calculate with this calculator?',
      answer: 'This calculator works for gravel, sand, topsoil, mulch, crushed stone, and fill dirt. Each material has different densities which affect the weight calculation.',
    },
    {
      question: 'How accurate is this calculator?',
      answer: 'The calculator uses industry-standard densities and is accurate within 5-10%. Actual weights may vary based on moisture content and material composition.',
    },
    {
      question: 'How much does a dump truck hold?',
      answer: 'A typical dump truck holds about 10-14 cubic yards. The calculator estimates truck loads based on 10 cubic yards per load.',
    },
    {
      question: 'Should I order extra material?',
      answer: 'Yes, always order 5-10% extra to account for settling, compaction, and uneven surfaces.',
    },
  ];

  return (
    <CalculatorLayout
      title="Bulk Material Calculator"
      description="Calculate cubic yards for bulk construction and landscaping materials"
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

          <SelectField
            label="Material Type"
            name="materialType"
            value={materialType}
            onChange={setMaterialType}
            options={Object.entries(materialDensities).map(([key, value]) => ({
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
          'Determine the desired depth in inches',
          'Select your material type from the dropdown',
          'Click Calculate to get the amount needed',
        ]}
        formula={{
          description: 'Volume calculation for bulk materials:',
          equation: 'Volume (cubic yards) = (Length × Width × Depth/12) / 27\nWeight (tons) = Volume × Material Density / 2000',
        }}
        tips={[
          'Measure the area carefully for accurate results',
          'Consider compaction - loose materials settle 10-20%',
          'Order 5-10% extra for waste and uneven areas',
          'Different suppliers may have slightly different material densities',
          'Wet materials weigh more than dry materials',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
