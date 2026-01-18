export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-lg">
        <p className="text-sm text-gray-500 mb-8">Last updated: January 18, 2025</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <p className="text-gray-600 mb-4">
          Build Calculators does not collect personal information. We may use analytics to understand how our calculators are used, 
          but this data is anonymous and aggregated.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
        <p className="text-gray-600 mb-4">
          We may use cookies for analytics purposes only. No personal data is stored in cookies.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
        <p className="text-gray-600 mb-4">
          We may use third-party analytics services (like Google Analytics) to improve our website. 
          These services have their own privacy policies.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p className="text-gray-600">
          Questions about this privacy policy? Contact us at contact@buildcalc.co
        </p>
      </div>
    </div>
  );
}
