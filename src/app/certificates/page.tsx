import { useTranslation } from 'react-i18next';

export default function Certificates() {
  const { t } = useTranslation();
  
  const certificates = [
    {
      src: "/certificate1.jpg",
      alt: t('certificates.certificates.iso9001.alt'),
      title: t('certificates.certificates.iso9001.title')
    },
    {
      src: "/certificate2.jpg",
      alt: t('certificates.certificates.fssai.alt'),
      title: t('certificates.certificates.fssai.title')
    },
    {
      src: "/certificate3.jpg",
      alt: t('certificates.certificates.apeda.alt'),
      title: t('certificates.certificates.apeda.title')
    },
    // Add more certificates as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-cream-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-900 mb-6 text-center mt-10">{t('certificates.hero.title')}</h1>
        <p className="text-xl text-amber-700 mb-12 text-center max-w-2xl mx-auto">
          {t('certificates.hero.subtitle')}
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