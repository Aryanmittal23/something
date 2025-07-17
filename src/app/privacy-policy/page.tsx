export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-cream-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-900 mb-8 text-center mt-10">Privacy Policy</h1>
        <div className="text-amber-800 text-lg space-y-6 bg-white rounded-lg shadow p-8">
          <p>
            This Privacy Policy describes how GlobalTrustHub collects, uses, and protects your personal information when you use our website. By accessing or using our services, you agree to the terms of this Privacy Policy.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Usage data and cookies</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
          <ul className="list-disc list-inside ml-4">
            <li>To provide and maintain our services</li>
            <li>To communicate with you</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
          <ul className="list-disc list-inside ml-4">
            <li>You have the right to access, update, or delete your personal information.</li>
            <li>You may opt out of receiving communications from us at any time.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@globaltrusthub.com" className="text-amber-700 underline">info@globaltrusthub.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
} 