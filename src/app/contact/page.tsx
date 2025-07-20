import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-cream-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-2 text-center">{t('contact.hero.title')}</h1>
        <p className="text-amber-700 mb-8 text-center">{t('contact.hero.subtitle')}</p>
        <form
          action="https://formspree.io/f/myzpzybq"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-1">{t('contact.form.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder={t('contact.form.namePlaceholder')}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-1">{t('contact.form.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder={t('contact.form.emailPlaceholder')}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-1">{t('contact.form.message')}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder={t('contact.form.messagePlaceholder')}
              required
            />
          </div>
          {/* Optional: Add a hidden input for reply-to */}
          <input type="hidden" name="_replyto" />
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded transition-colors"
          >
            {t('contact.form.sendMessage')}
          </button>
        </form>
        <div className="mt-10 border-t pt-6">
          <h2 className="text-lg font-semibold text-amber-900 mb-4">{t('contact.contactInfo.title')}</h2>
          <div className="space-y-3">
            <a href="mailto:info@globaltrusthub.com" className="flex items-center space-x-3 hover:underline group" aria-label="Email">
              <Mail className="text-amber-600 group-hover:text-amber-800 transition-colors" size={18} />
              <span className="text-amber-700">{t('contact.contactInfo.email')}</span>
            </a>
            <a href="tel:+918109663368" className="flex items-center space-x-3 hover:underline group" aria-label="Phone">
              <Phone className="text-amber-600 group-hover:text-amber-800 transition-colors" size={18} />
              <span className="text-amber-700">{t('contact.contactInfo.phone')}</span>
            </a>
            <a href="https://www.google.com/maps/place/Sheopur,+Madhya+Pradesh,+India" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:underline group" aria-label="Location">
              <MapPin className="text-amber-600 group-hover:text-amber-800 transition-colors" size={18} />
              <span className="text-amber-700">{t('contact.contactInfo.location')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 