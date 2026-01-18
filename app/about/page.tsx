export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">About Build Calculators</h1>
      <div className="prose prose-lg">
        <p className="text-lg text-gray-600 mb-4">
          Build Calculators provides free, accurate construction and landscaping calculators for contractors, builders, and DIY homeowners.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to help you calculate material quantities quickly and accurately, saving time and money on your projects.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Build Calculators?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>100% free to use</li>
          <li>Accurate industry-standard formulas</li>
          <li>Mobile-friendly design</li>
          <li>No registration required</li>
          <li>Updated regularly</li>
        </ul>
      </div>
    </div>
  );
}
