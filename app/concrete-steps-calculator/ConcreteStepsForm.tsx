'use client';

import { useState } from 'react';
import { InputField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function ConcreteStepsForm() {
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

    if (!n || !w || !d || !h) { setError('Please fill in all fields'); return; }
    if (n <= 0 || n > 50) { setError('Number of steps must be between 1 and 50'); return; }
    if (w <= 0 || w > 20) { setError('Step width must be between 0 and 20 feet'); return; }
    if (d <= 0 || d > 5) { setError('Step depth must be between 0 and 5 feet'); return; }
    if (h <= 0 || h > 2) { setError('Step height must be between 0 and 2 feet'); return; }

    let totalVolumeCubicFeet = 0;
    for (let i = 1; i <= n; i++) {
      totalVolumeCubicFeet += w * d * (h * i);
    }

    const cubicYards = totalVolumeCubicFeet / 27;
    const bags80lb = Math.ceil(cubicYards * 45);

    setResults([
      { label: 'Cubic Yards', value: cubicYards.toFixed(2), unit: 'yd³', primary: true },
      { label: 'Cubic Feet', value: totalVolumeCubicFeet.toFixed(2), unit: 'ft³' },
      { label: '80lb Bags', value: bags80lb, unit: 'bags' },
    ]);
  };

  const reset = () => {
    setNumSteps(''); setStepWidth(''); setStepDepth(''); setStepHeight('');
    setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Dimensions</h2>
        <InputField label="Number of Steps" name="numSteps" value={numSteps} onChange={setNumSteps} min={1} max={50} step={1} placeholder="e.g., 5" />
        <InputField label="Step Width" name="stepWidth" value={stepWidth} onChange={setStepWidth} unit="feet" placeholder="e.g., 4" />
        <InputField label="Step Depth (Tread)" name="stepDepth" value={stepDepth} onChange={setStepDepth} unit="feet" placeholder="e.g., 1" />
        <InputField label="Step Height (Rise)" name="stepHeight" value={stepHeight} onChange={setStepHeight} unit="feet" placeholder="e.g., 0.5" />
        <div className="flex gap-4">
          <CalculatorButton onClick={calculate}>Calculate</CalculatorButton>
          <CalculatorButton onClick={reset} variant="secondary">Reset</CalculatorButton>
        </div>
      </div>
      <div>
        {error && <ErrorMessage message={error} />}
        {results && <ResultDisplay results={results} />}
        {results && (
          <button onClick={() => window.print()} className="mt-4 px-6 py-2 border-2 border-gray-300 hover:border-gray-900 transition-colors no-print">
            Print Results
          </button>
        )}
      </div>
    </div>
  );
}
