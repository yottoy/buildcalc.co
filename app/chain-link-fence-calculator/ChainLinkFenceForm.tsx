'use client';

import { useState } from 'react';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';

export default function ChainLinkFenceForm() {
  const [length, setLength] = useState<string>('');
  const [height, setHeight] = useState<string>('4');
  const [postSpacing, setPostSpacing] = useState<string>('10');
  const [includeGates, setIncludeGates] = useState<string>('0');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    const l = parseFloat(length);
    const h = parseFloat(height);
    const spacing = parseFloat(postSpacing);
    const gates = parseFloat(includeGates);

    if (!l || !h || !spacing) { setError('Please fill in all fields'); return; }
    if (l <= 0 || l > 1000) { setError('Length must be between 0 and 1000 feet'); return; }

    const numPosts = Math.ceil(l / spacing) + 1;
    const fencingLinearFeet = l;
    const topRailLinearFeet = l;

    const fabricCostPerFoot = h === 3 ? 3 : h === 4 ? 4 : h === 5 ? 5 : 6;
    const postCost = 12;
    const topRailCostPerFoot = 2;
    const gateCost = 150;

    const fabricCost = fencingLinearFeet * fabricCostPerFoot;
    const postsCost = numPosts * postCost;
    const topRailCost = topRailLinearFeet * topRailCostPerFoot;
    const gatesCost = gates * gateCost;
    const totalMaterialCost = fabricCost + postsCost + topRailCost + gatesCost;
    const totalInstalledCost = totalMaterialCost * 2.5;

    setResults([
      { label: 'Fence Posts', value: numPosts, unit: 'posts', primary: true },
      { label: 'Chain Link Fabric', value: fencingLinearFeet, unit: `linear feet (${h}' height)` },
      { label: 'Top Rail', value: topRailLinearFeet, unit: 'linear feet' },
      { label: 'Estimated Material Cost', value: `$${totalMaterialCost.toFixed(2)}`, unit: '' },
      { label: 'Estimated Installed Cost', value: `$${totalInstalledCost.toFixed(2)}`, unit: '(materials + labor)' },
      { label: 'Cost per Linear Foot', value: `$${(totalInstalledCost / l).toFixed(2)}`, unit: '/ft' },
    ]);
  };

  const reset = () => {
    setLength(''); setHeight('4'); setPostSpacing('10');
    setIncludeGates('0'); setResults(null); setError('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Fence Details</h2>
        <InputField label="Fence Length" name="length" value={length} onChange={setLength} unit="feet" placeholder="e.g., 100" />
        <SelectField label="Fence Height" name="height" value={height} onChange={setHeight} options={[
          { value: '3', label: '3 feet' }, { value: '4', label: '4 feet' },
          { value: '5', label: '5 feet' }, { value: '6', label: '6 feet' },
        ]} />
        <SelectField label="Post Spacing" name="postSpacing" value={postSpacing} onChange={setPostSpacing} options={[
          { value: '8', label: '8 feet' }, { value: '10', label: '10 feet' },
        ]} />
        <SelectField label="Number of Gates" name="includeGates" value={includeGates} onChange={setIncludeGates} options={[
          { value: '0', label: 'No gates' }, { value: '1', label: '1 gate' },
          { value: '2', label: '2 gates' }, { value: '3', label: '3 gates' },
        ]} />
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
  );
}
