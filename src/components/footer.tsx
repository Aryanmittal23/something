import { Link } from "react-router-dom"; // if using react-router
import { Instagram, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react"
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-brand-navy-900 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img
                src="/logo-main.png"
                alt="GlobalTrustHub - Where Quality Meets the World"
                width={280}
                height={80}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-black mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@GlobalTrustHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black group transition-colors p-2 rounded-full hover:bg-brand-navy-800"
                aria-label="YouTube"
              >
                {/* YouTube SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  width={20}
                  height={20}
                  className="text-black group-hover:text-[#FF0000]"
                >
                  <path
                    fill="currentColor"
                    d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.94C18.2 6 12 6 12 6s-6.2 0-7.87.06A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.93 1.94C5.8 18 12 18 12 18s6.2 0 7.87-.06a2.75 2.75 0 0 0 1.93-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999ZM10 15.5v-7l6 3.5-6 3.5Z"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/globaltrusthub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black group transition-colors p-2 rounded-full hover:bg-brand-navy-800"
                aria-label="X"
              >
                {/* X (Twitter) logo SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  width={20}
                  height={20}
                  className="text-black group-hover:text-[#1DA1F2]"
                >
                  <path
                    fill="currentColor"
                    d="M17.53 3.5h3.42l-7.48 8.54L22.5 20.5h-6.13l-4.8-5.98-5.5 5.98H2.05l8.01-8.71L1.5 3.5h6.32l4.37 5.43 5.34-5.43zm-1.13 15.13h1.89L6.62 5.77H4.62l11.78 12.86z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/globaltrusthub25/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black group transition-colors p-2 rounded-full hover:bg-brand-navy-800"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-black group-hover:text-[#E4405F]" />
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-mittal-911800214/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black group transition-colors p-2 rounded-full hover:bg-brand-navy-800"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-black group-hover:text-[#0077B5]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-black">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {[
                { name: t('nav.home'), href: "/" },
                { name: t('nav.about'), href: "/about" },
                { name: t('nav.products'), href: "/products" },
                { name: t('nav.exportProcess'), href: "/export-process" },
                { name: t('nav.certificate'), href: "/certificates" },
                { name: t('nav.contact'), href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-black hover:text-brand-green-400 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-black">{t('footer.contactInfo')}</h3>
            <div className="space-y-4">
              <a href="mailto:info@globaltrusthub.com" className="flex items-center space-x-3 group hover:underline" aria-label="Email">
                <Mail size={16} className="text-brand-green-400 group-hover:text-brand-green-600 transition-colors" />
                <span className="text-black">info@globaltrusthub.com</span>
              </a>
              <a href="tel:+918109663368" className="flex items-center space-x-3 group hover:underline" aria-label="Phone">
                <Phone size={16} className="text-brand-green-400 group-hover:text-brand-green-600 transition-colors" />
                <span className="text-black">+91 8109663368</span>
              </a>
              <a href="https://www.google.com/maps/place/Sheopur,+Madhya+Pradesh,+India" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group hover:underline" aria-label="Location">
                <MapPin size={16} className="text-brand-green-400 group-hover:text-brand-green-600 transition-colors" />
                <span className="text-black">Sheopur, India</span>
              </a>
              <a href="https://www.globaltrusthub.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group hover:underline" aria-label="Website">
                <Globe size={16} className="text-brand-green-400 group-hover:text-brand-green-600 transition-colors" />
                <span className="text-black">www.globaltrusthub.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-navy-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-black hover:text-brand-green-400 text-sm transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms" className="text-black hover:text-brand-green-400 text-sm transition-colors">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
