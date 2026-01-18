'use client';

import { useState } from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import { InputField, SelectField, CalculatorButton, ResultDisplay, ErrorMessage } from '@/components/CalculatorForm';
import FAQSection from '@/components/FAQSection';
import HowToUse from '@/components/HowToUse';

export default function ConstructionCostCalculator() {
  const [squareFootage, setSquareFootage] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('basic');
  const [laborRate, setLaborRate] = useState<string>('50');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const projectTypes: { [key: string]: { name: string; materialCostPerSqFt: number; laborHoursPerSqFt: number } } = {
    basic: { name: 'Basic Renovation', materialCostPerSqFt: 15, laborHoursPerSqFt: 0.5 },
    standard: { name: 'Standard Build', materialCostPerSqFt: 25, laborHoursPerSqFt: 0.75 },
    premium: { name: 'Premium Build', materialCostPerSqFt: 40, laborHoursPerSqFt: 1.0 },
    luxury: { name: 'Luxury Build', materialCostPerSqFt: 60, laborHoursPerSqFt: 1.5 },
  };

  const calculate = () => {
    setError('');
    
    const sqft = parseFloat(squareFootage);
    const rate = parseFloat(laborRate);

    if (!sqft || !rate) {
      setError('Please fill in all fields');
      return;
    }

    if (sqft <= 0 || sqft > 50000) {
      setError('Square footage must be between 0 and 50,000');
      return;
    }

    if (rate <= 0 || rate > 500) {
      setError('Labor rate must be between $0 and $500 per hour');
      return;
    }

    const project = projectTypes[projectType];
    const materialCost = sqft * project.materialCostPerSqFt;
    const laborHours = sqft * project.laborHoursPerSqFt;
    const laborCost = laborHours * rate;
    const totalCost = materialCost + laborCost;
    const costPerSqFt = totalCost / sqft;

    setResults([
      { label: 'Total Estimated Cost', value: `$${totalCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, primary: true },
      { label: 'Material Cost', value: `$${materialCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
      { label: 'Labor Cost', value: `$${laborCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
      { label: 'Cost per Square Foot', value: `$${costPerSqFt.toFixed(2)}`, unit: '/ft²' },
      { label: 'Estimated Labor Hours', value: laborHours.toFixed(1), unit: 'hours' },
    ]);
  };

  const reset = () => {
    setSquareFootage('');
    setProjectType('basic');
    setLaborRate('50');
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
      name: 'Material Cost Estimator',
      slug: 'material-cost-estimator',
      description: 'Estimate total material costs for construction projects',
    },
    {
      name: 'Drywall Calculator',
      slug: 'drywall-calculator',
      description: 'Estimate drywall sheets needed for walls and ceilings',
    },
  ];

  const faqs = [
    {
      question: 'How accurate is this construction cost estimate?',
      answer: 'This calculator provides rough estimates based on typical project costs. Actual costs vary significantly by location, materials chosen, labor rates, and project complexity. Use this as a starting point and get detailed quotes from contractors.',
    },
    {
      question: 'What does the project type include?',
      answer: 'Basic includes essential materials and finishes. Standard includes mid-grade materials. Premium includes high-quality materials and custom work. Luxury includes top-tier materials and extensive custom work.',
    },
    {
      question: 'Are permits and fees included?',
      answer: 'No, this estimate covers materials and labor only. Add 5-10% for permits, inspections, insurance, and contingency costs.',
    },
    {
      question: 'What is a typical labor rate?',
      answer: 'Labor rates vary by location and trade. General contractors typically charge $40-$80 per hour. Specialized trades may charge $50-$150 per hour. The calculator uses $50/hour as a default.',
    },
  ];

  return (
    <CalculatorLayout
      title="Construction Cost Calculator"
      description="Estimate total construction project material costs"
      relatedCalculators={relatedCalculators}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Enter Project Details</h2>
          
          <InputField
            label="Square Footage"
            name="squareFootage"
            value={squareFootage}
            onChange={setSquareFootage}
            unit="ft²"
            placeholder="e.g., 1500"
          />

          <SelectField
            label="Project Type"
            name="projectType"
            value={projectType}
            onChange={setProjectType}
            options={Object.entries(projectTypes).map(([key, value]) => ({
              value: key,
              label: value.name,
            }))}
          />

          <InputField
            label="Labor Rate"
            name="laborRate"
            value={laborRate}
            onChange={setLaborRate}
            unit="$/hour"
            placeholder="e.g., 50"
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
          'Calculate or measure the total square footage of your project',
          'Select the project type that best matches your needs',
          'Enter the average labor rate in your area',
          'Click Calculate to get cost estimates',
          'Add 10-20% contingency for unexpected costs',
        ]}
        formula={{
          description: 'Construction cost estimation formula:',
          equation: 'Material Cost = Square Footage × Material Cost per Sq Ft\nLabor Cost = Square Footage × Labor Hours per Sq Ft × Labor Rate\nTotal Cost = Material Cost + Labor Cost',
        }}
        tips={[
          'Get multiple quotes from licensed contractors',
          'Factor in 10-20% contingency for unexpected costs',
          'Consider seasonal pricing variations',
          'Check if permits and inspections are required',
          'Material costs can vary significantly by location and availability',
        ]}
      />

      <FAQSection faqs={faqs} />
    </CalculatorLayout>
  );
}
