export default function Certificates() {
  const certificates = [
    {
      src: "/certificate1.jpg",
      alt: "ISO 9001:2015 Certificate",
      title: "ISO 9001:2015"
    },
    {
      src: "/certificate2.jpg",
      alt: "FSSAI Certificate",
      title: "FSSAI"
    },
    {
      src: "/certificate3.jpg",
      alt: "APEDA Certificate",
      title: "APEDA"
    },
    // Add more certificates as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-cream-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-900 mb-6 text-center mt-10">Our Certificates</h1>
        <p className="text-xl text-amber-700 mb-12 text-center max-w-2xl mx-auto">
          We are committed to quality and compliance. Here are some of the certifications that demonstrate our dedication to international standards and food safety.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img
                src={cert.src}
                alt={cert.alt}
                className="h-64 w-auto object-contain mb-4 rounded border border-amber-100 shadow-md bg-cream-50"
              />
              <div className="text-lg font-semibold text-amber-900">{cert.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 