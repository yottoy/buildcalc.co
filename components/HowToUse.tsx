import React from 'react';

interface HowToUseProps {
  title?: string;
  steps: string[];
  formula?: {
    description: string;
    equation: string;
  };
  tips?: string[];
}

export default function HowToUse({ 
  title = "How to Use This Calculator",
  steps, 
  formula,
  tips 
}: HowToUseProps) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": `Step ${index + 1}`,
      "text": step,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            {steps.map((step, index) => (
              <li key={index} className="leading-relaxed">{step}</li>
            ))}
          </ol>
        </div>

        {formula && (
          <div>
            <h3 className="text-2xl font-bold mb-3">Formula</h3>
            <p className="text-gray-600 mb-2">{formula.description}</p>
            <div className="bg-gray-100 p-4 font-mono text-sm border-l-4 border-gray-900">
              {formula.equation}
            </div>
          </div>
        )}

        {tips && tips.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-3">Tips for Accurate Measurements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {tips.map((tip, index) => (
                <li key={index} className="leading-relaxed">{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
