"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"; // if using react-router
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.products'), href: "/products" },
    { name: t('nav.exportProcess'), href: "/export-process" },
    { name: t('nav.certificate'), href: "/certificates" },
    { name: t('nav.contact'), href: "/contact" },
  ]

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-brand border-b border-brand-navy-100" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo-main.png"
              alt="GlobalTrustHub - Where Quality Meets the World"
              width={500}
              height={150}
              className="h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-brand-navy-700 hover:text-brand-green-500 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* CTA Button
          <div className="hidden lg:block text-lg">
            <Link to="/contact">
              <motion.button
                className="bg-brand-green-500 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-brand-green-600 transition-colors shadow-green"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </Link>
          </div> */}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy-700 hover:text-brand-green-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-brand border border-brand-navy-100">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-brand-navy-700 hover:text-brand-green-500 hover:bg-brand-navy-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to="/contact">
                  <button className="w-full bg-brand-green-500 text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-brand-green-600 transition-colors">
                    {t('nav.getQuote')}
                  </button>
                </Link>
              </div>
              <div className="px-3 py-2 border-t border-brand-navy-100">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
