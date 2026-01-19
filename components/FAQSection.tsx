import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  // Generate FAQPage schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Add FAQPage Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* FAQ Content with structured data markup */}
      <section className="mt-12 border-t border-gray-200 pt-12">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <h3 className="text-xl font-bold mb-2" itemProp="name">
                {faq.question}
              </h3>
              <div 
                itemScope 
                itemProp="acceptedAnswer" 
                itemType="https://schema.org/Answer"
              >
                <p className="text-gray-600 leading-relaxed" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
