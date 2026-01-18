'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function DrywallCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('8');
  const [sheetSize, setSheetSize] = useState<string>('4x8');
  const [wasteFactor, setWasteFactor] = useState<string>('10');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const waste = parseFloat(wasteFactor) / 100;

    if (!l || !w || !h) {
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

    // Calculate wall area (perimeter × height)
    const perimeter = 2 * (l + w);
    const wallArea = perimeter * h;
    
    // Calculate ceiling area
    const ceilingArea = l * w;
    
    // Total area
    const totalArea = wallArea + ceilingArea;
    
    // Sheet size in sq ft
    const sheetSqFt = sheetSize === '4x8' ? 32 : sheetSize === '4x10' ? 40 : 48;
    
    // Calculate sheets needed with waste
    const sheets = Math.ceil((totalArea * (1 + waste)) / sheetSqFt);
    
    // Estimate materials
    const screwsLbs = Math.ceil(sheets * 0.5); // ~0.5 lbs per sheet
    const tapeRolls = Math.ceil(totalArea / 500); // 500 sq ft per roll
    const compoundGallons = Math.ceil(totalArea / 100); // 100 sq ft per gallon

    setResults([
      { label: 'Drywall Sheets', value: sheets, unit: 'sheets', primary: true },
      { label: 'Total Area', value: totalArea.toFixed(0), unit: 'sq ft' },
      { label: 'Drywall Screws', value: screwsLbs, unit: 'lbs' },
      { label: 'Joint Tape', value: tapeRolls, unit: 'rolls' },
      { label: 'Joint Compound', value: compoundGallons, unit: 'gallons' },
    ]);
  };

  const reset = () => {
    setLength('');
    setWidth('');
    setHeight('8');
    setSheetSize('4x8');
    setWasteFactor('10');
    setResults(null);
    setError('');
  };

  const relatedCalculators = [
    {
      name: 'Insulation Calculator',
      slug: 'insulation-calculator',
      description: 'Estimate insulation materials needed',
    },
    {
      name: 'Stucco Calculator',
      slug: 'stucco-calculator',
      description: 'Calculate stucco materials for walls',
    },
    {
      name: 'Construction Cost Calculator',
      slug: 'construction-cost-calculator',
      description: 'Estimate total construction costs',
    },
  ];

  const faqs = [
    {
      question: 'What size drywall sheets should I use?',
      answer: '4x8 sheets are standard and easiest to handle. 4x12 sheets reduce seams but are heavier. Use 1/2" thickness for walls, 5/8" for ceilings.',
    },
    {
      question: 'How much waste should I factor in?',
      answer: '10% waste is standard for rectangular rooms. Add 15-20% for rooms with many corners, angles, or openings.',
    },
    {
      question: 'How many screws do I need per sheet?',
      answer: 'Use screws every 12 inches on walls, 8 inches on ceilings. A typical 4x8 sheet needs 32-40 screws. One pound of screws is about 150-200 screws.',
    },
    {
      question: 'Can I install drywall myself?',
      answer: 'Yes, but it requires proper tools (drywall lift for ceilings, T-square, utility knife). Taping and finishing joints takes practice for smooth results.',
    },
  ];

  return (
    <CalculatorLayout
      title="Drywall Calculator"
      description="Estimate drywall sheets needed for walls and ceilings"
      relatedCalculators={relatedCalculators}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Room Dimensions</h2>
          
          <InputField
            label="Room Length"
            name="length"
            value={length}
            onChange={setLength}
            unit="feet"
            placeholder="e.g., 20"
          />

          <InputField
            label="Room Width"
            name="width"
            value={width}
            onChange={setWidth}
            unit="feet"
            placeholder="e.g., 15"
          />

          <SelectField
            label="Wall Height"
            name="height"
            value={height}
            onChange={setHeight}
            options={[
              { value: '8', label: '8 feet' },
              { value: '9', label: '9 feet' },
              { value: '10', label: '10 feet' },
              { value: '12', label: '12 feet' },
            ]}
          />

          <SelectField
            label="Sheet Size"
            name="sheetSize"
            value={sheetSize}
            onChange={setSheetSize}
            options={[
              { value: '4x8', label: '4x8 feet (32 sq ft)' },
              { value: '4x10', label: '4x10 feet (40 sq ft)' },
              { value: '4x12', label: '4x12 feet (48 sq ft)' },
            ]}
          />

          <SelectField
            label="Waste Factor"
            name="wasteFactor"
            value={wasteFactor}
            onChange={setWasteFactor}
            options={[
              { value: '5', label: '5%' },
              { value: '10', label: '10%' },
              { value: '15', label: '15%' },
              { value: '20', label: '20%' },
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
          'Measure the length and width of your room',
          'Measure the wall height (typically 8 feet)',
          'Select your drywall sheet size',
          'Choose a waste factor (10% is standard)',
          'Click Calculate to get materials needed',
        ]}
        formula={{
          description: 'Drywall calculation formula:',
          equation: 'Wall Area = Perimeter × Height\nCeiling Area = Length × Width\nSheets = (Total Area × (1 + Waste)) / Sheet Size',
        }}
        tips={[
          'Hang drywall perpendicular to studs for strength',
          'Stagger seams to avoid long continuous joints',
          'Use a drywall lift for ceiling installation',
          'Apply three coats of joint compound for smooth finish',
          'Sand between coats for professional results',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
