"use client"
import { Link } from "react-router-dom";
import { Award, Users, Target, Globe, Shield } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-cream-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-24 px-4">
        {/* No background image or overlay */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">{t('home.hero.title')}</h1>
          <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}<br />
            <span className="block mt-4 text-lg md:text-xl text-amber-800">
              {t('home.hero.description1')}
            </span>
            <span className="block mt-4 text-lg md:text-xl text-amber-800">
              {t('home.hero.description2')}
            </span>
            <span className="block mt-4 text-lg md:text-xl text-amber-800">
              {t('home.hero.description3')}
            </span>
          </p>
          <Link
            to="/products"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition-colors"
          >
            {t('home.hero.exploreProducts')}
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-10 text-center">{t('home.featuredProducts.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t('home.featuredProducts.premiumMakhana'),
                image: "/makhana.jpg",
              },
              {
                name: t('home.featuredProducts.handwovenTextiles'),
                image: "/textiles.jpg",
              },
              {
                name: t('home.featuredProducts.brassArtifacts'),
                image: "/brass-artifacts.jpg",
              },
            ].map((product) => (
              <Link
                key={product.name}
                to={`/products?product=${encodeURIComponent(product.name)}`}
                className="bg-cream-50 rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer"
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-auto mb-4 rounded shadow-md object-cover"
                />
                <h3 className="text-xl font-semibold text-amber-900">{product.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-10 text-center">{t('home.whyChooseUs.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-amber-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-amber-900 mb-4">{t('home.whyChooseUs.freshPerspective.title')}</h3>
              <p className="text-amber-700">{t('home.whyChooseUs.freshPerspective.description')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-amber-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-amber-900 mb-4">{t('home.whyChooseUs.honestyDedication.title')}</h3>
              <p className="text-amber-700">{t('home.whyChooseUs.honestyDedication.description')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-amber-900 mb-4">{t('home.whyChooseUs.customerFocus.title')}</h3>
              <p className="text-amber-700">{t('home.whyChooseUs.customerFocus.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-10 text-center">{t('home.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t('home.values.qualityFirst.title'),
                description: t('home.values.qualityFirst.description'),
              },
              {
                icon: Users,
                title: t('home.values.trustTransparency.title'),
                description: t('home.values.trustTransparency.description'),
              },
              {
                icon: Target,
                title: t('home.values.customerFocus.title'),
                description: t('home.values.customerFocus.description'),
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-cream-50 rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <value.icon className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-amber-900 mb-4">{value.title}</h3>
                <p className="text-amber-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">{t('home.getInTouch.title')}</h2>
          <p className="text-lg text-amber-700 mb-8">
            {t('home.getInTouch.description')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition-colors"
          >
            {t('home.getInTouch.contactUs')}
          </Link>
        </div>
      </section>
    </div>
  );
}
