'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';
import type { Metadata } from 'next';

export default function ConcreteStepsCalculator() {
  const [numSteps, setNumSteps] = useState<string>('');
  const [stepWidth, setStepWidth] = useState<string>('');
  const [stepDepth, setStepDepth] = useState<string>('');
  const [stepHeight, setStepHeight] = useState<string>('');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    
    const n = parseFloat(numSteps);
    const w = parseFloat(stepWidth);
    const d = parseFloat(stepDepth);
    const h = parseFloat(stepHeight);

    if (!n || !w || !d || !h) {
      setError('Please fill in all fields');
      return;
    }

    if (n <= 0 || n > 50) {
      setError('Number of steps must be between 1 and 50');
      return;
    }

    if (w <= 0 || w > 20) {
      setError('Step width must be between 0 and 20 feet');
      return;
    }

    if (d <= 0 || d > 5) {
      setError('Step depth must be between 0 and 5 feet');
      return;
    }

    if (h <= 0 || h > 2) {
      setError('Step height must be between 0 and 2 feet');
      return;
    }

    // Calculate volume for triangular staircase structure
    // Total volume = sum of each step's volume
    let totalVolumeCubicFeet = 0;
    for (let i = 1; i <= n; i++) {
      totalVolumeCubicFeet += w * d * (h * i);
    }

    const cubicYards = totalVolumeCubicFeet / 27;
    const bags80lb = Math.ceil(cubicYards * 45); // ~45 80lb bags per cubic yard

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Cubic Feet', value: totalVolumeCubicFeet.toFixed(2), unit: 'ft³' },
      { label: '80lb Bags', value: bags80lb, unit: 'bags' },
    ]);
  };

  const reset = () => {
    setNumSteps('');
    setStepWidth('');
    setStepDepth('');
    setStepHeight('');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Concrete Cost Calculator',
      slug: 'concrete-cost-calculator',
      description: 'Estimate total concrete costs based on project dimensions',
    },
    {
      name: 'Concrete Driveway Calculator',
      slug: 'concrete-driveway-calculator',
      description: 'Calculate concrete needed for driveway projects',
    },
    {
      name: 'Sand Calculator',
      slug: 'sand-calculator',
      description: 'Calculate sand needed for construction and landscaping',
    },
  ];

  const faqs = [
    {
      question: 'How do I calculate concrete needed for steps?',
      answer: 'Measure the width, depth (tread), and height (rise) of each step. The calculator accounts for the cumulative volume of all steps in the staircase structure.',
    },
    {
      question: 'How accurate is this calculator?',
      answer: 'This calculator uses industry-standard formulas and is accurate within 5%. Always order 5-10% extra concrete to account for waste and spillage.',
    },
    {
      question: 'What is the standard step size?',
      answer: 'Standard outdoor steps are typically 36-48 inches wide, 11-14 inches deep (tread), and 6-8 inches high (rise).',
    },
    {
      question: 'Should I use bags or ready-mix concrete?',
      answer: 'For small projects (less than 1 cubic yard), bagged concrete is convenient. For larger projects, ready-mix concrete delivered by truck is more cost-effective.',
    },
  ];

  return (
    <CalculatorLayout
      title="Concrete Steps Calculator"
      description="Calculate exactly how much concrete you need for your steps and stairs project"
      relatedCalculators={relatedCalculators}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
          
          <InputField
            label="Number of Steps"
            name="numSteps"
            value={numSteps}
            onChange={setNumSteps}
            min={1}
            max={50}
            step={1}
            placeholder="e.g., 5"
          />

          <InputField
            label="Step Width"
            name="stepWidth"
            value={stepWidth}
            onChange={setStepWidth}
            unit="feet"
            placeholder="e.g., 4"
          />

          <InputField
            label="Step Depth (Tread)"
            name="stepDepth"
            value={stepDepth}
            onChange={setStepDepth}
            unit="feet"
            placeholder="e.g., 1"
          />

          <InputField
            label="Step Height (Rise)"
            name="stepHeight"
            value={stepHeight}
            onChange={setStepHeight}
            unit="feet"
            placeholder="e.g., 0.5"
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
          'Measure the width of your steps in feet',
          'Measure the depth (tread) of each step in feet',
          'Measure the height (rise) of each step in feet',
          'Count the total number of steps',
          'Enter all measurements into the calculator',
          'Click Calculate to get the concrete needed',
        ]}
        formula={{
          description: 'The calculator sums the volume of each step in the staircase:',
          equation: 'Total Volume = Σ(Width × Depth × (Height × Step Number)) / 27 cubic yards',
        }}
        tips={[
          'Always order 5-10% extra concrete to account for waste',
          'Standard step rise is 6-8 inches (0.5-0.67 feet)',
          'Standard step tread is 11-14 inches (0.92-1.17 feet)',
          'Consider adding a base or landing pad to your calculation',
          'Check local building codes for required step dimensions',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
