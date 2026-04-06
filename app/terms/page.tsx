export const dynamic = 'force-static';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <div className="prose prose-lg">
        <p className="text-sm text-gray-500 mb-8">Last updated: February 9, 2026</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Use of Service</h2>
        <p className="text-gray-600 mb-4">
          Build Calculators provides construction calculators for informational purposes. 
          While we strive for accuracy, we make no guarantees about the precision of calculations.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          Always verify calculations and consult with professionals for your specific project. 
          Build Calculators is not responsible for any errors, omissions, or damages resulting from use of these calculators.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Professional Advice</h2>
        <p className="text-gray-600 mb-4">
          These calculators are tools to assist with estimates. For critical projects, 
          consult with licensed contractors, engineers, or other qualified professionals.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
        <p className="text-gray-600">
          We reserve the right to modify these terms at any time. Continued use of Build Calculators 
          constitutes acceptance of any changes.
        </p>
      </div>
    </div>
  );
}
