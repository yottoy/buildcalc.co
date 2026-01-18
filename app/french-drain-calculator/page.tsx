'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function FrenchDrainCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [pipeSize, setPipeSize] = useState<string>('4');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    const pipe = parseFloat(pipeSize);

    if (!l || !w || !d) {
      setError('Please fill in all fields');
      return;
    }

    if (l <= 0 || l > 500) {
      setError('Length must be between 0 and 500 feet');
      return;
    }

    if (w <= 0 || w > 10) {
      setError('Width must be between 0 and 10 feet');
      return;
    }

    if (d <= 0 || d > 48) {
      setError('Depth must be between 0 and 48 inches');
      return;
    }

    // Calculate gravel needed
    const cubicFeet = l * w * (d / 12);
    const cubicYards = cubicFeet / 27;
    
    // Calculate pipe needed
    const pipeLength = l;
    
    // Calculate fabric needed (add 2 feet overlap on each end)
    const fabricLength = l + 4;
    const fabricWidth = w + 2; // Extra for wrapping
    const fabricSquareFeet = (fabricLength * fabricWidth);
    
    // Estimate tons of gravel (gravel is ~2700 lbs per cubic yard)
    const tons = (cubicYards * 2700) / 2000;

    setResults([
      { label: 'Gravel Needed', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Gravel Weight', value: tons.toFixed(2), unit: 'tons' },
      { label: `${pipe}" Perforated Pipe`, value: pipeLength.toFixed(0), unit: 'feet' },
      { label: 'Landscape Fabric', value: fabricSquareFeet.toFixed(0), unit: 'ft²' },
      { label: 'Fabric Roll (4ft wide)', value: Math.ceil(fabricLength / 100), unit: 'rolls' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setDepth('');
    setPipeSize('4');
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
      name: 'Crushed Stone Calculator',
      slug: 'crushed-stone-calculator',
      description: 'Calculate crushed stone needed for driveways and base layers',
    },
    {
      name: 'Landscaping Calculator',
      slug: 'landscaping-calculator',
      description: 'Calculate materials for landscaping and garden projects',
    },
  ];

  const faqs = [
    {
      question: 'What is a French drain?',
      answer: 'A French drain is a trench filled with gravel and a perforated pipe that redirects water away from an area. It\'s used to prevent water accumulation and protect foundations.',
    },
    {
      question: 'How deep should a French drain be?',
      answer: 'French drains are typically 18-24 inches deep and 12-18 inches wide. The depth depends on the water table and drainage needs.',
    },
    {
      question: 'What type of gravel should I use?',
      answer: 'Use 3/4" to 1" crushed stone or pea gravel. Avoid sand or fine gravel as they can clog the system. Crushed stone provides better drainage.',
    },
    {
      question: 'Do I need landscape fabric?',
      answer: 'Yes, landscape fabric prevents soil from clogging the gravel and pipe. Wrap it around the gravel, not just line the trench.',
    },
  ];

  return (
    <CalculatorLayout
      title="French Drain Calculator"
      description="Estimate materials needed for drainage systems"
      relatedCalculators={relatedCalculators}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
          
          <InputField
            label="Trench Length"
            name="length"
            value={length}
            onChange={setLength}
            unit="feet"
            placeholder="e.g., 50"
          />

          <InputField
            label="Trench Width"
            name="width"
            value={width}
            onChange={setWidth}
            unit="feet"
            placeholder="e.g., 1.5"
          />

          <InputField
            label="Trench Depth"
            name="depth"
            value={depth}
            onChange={setDepth}
            unit="inches"
            placeholder="e.g., 18"
          />

          <SelectField
            label="Pipe Size"
            name="pipeSize"
            value={pipeSize}
            onChange={setPipeSize}
            options={[
              { value: '3', label: '3 inch' },
              { value: '4', label: '4 inch' },
              { value: '6', label: '6 inch' },
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
          'Measure the length of the drainage trench needed',
          'Determine the width of the trench (typically 12-18 inches)',
          'Decide on the depth (typically 18-24 inches)',
          'Select the perforated pipe size (4 inch is standard)',
          'Click Calculate to get materials needed',
        ]}
        formula={{
          description: 'French drain material calculation:',
          equation: 'Gravel Volume (cubic yards) = (Length × Width × Depth/12) / 27\nPipe Length = Trench Length\nFabric = (Length + 4) × (Width + 2) square feet',
        }}
        tips={[
          'Slope the trench at least 1% (1 inch per 8 feet) for proper drainage',
          'Use perforated pipe with holes facing down',
          'Wrap landscape fabric around gravel, not just line the trench',
          'Add a cleanout access point for maintenance',
          'Direct the drain outlet away from buildings',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
