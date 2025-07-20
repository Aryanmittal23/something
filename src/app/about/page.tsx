"use client"
import { motion } from "framer-motion"
import { Target, Eye, Users, Award } from "lucide-react"
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 to-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-amber-900 mb-6">{t('about.hero.title')}</h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-amber-900 mb-6">{t('about.companyStory.title')}</h2>
              <p className="text-lg text-amber-700 mb-6">
                {t('about.companyStory.description1')}
              </p>
              <p className="text-lg text-amber-700 mb-6">
                {t('about.companyStory.description2')}
              </p>
              <p className="text-lg text-amber-700">
              <span className="text-brand-green-600 font-semibold">
                    "{t('about.companyStory.description3')}"
                  </span>{" "} {t('about.companyStory.description4')}
              </p>
              <div className="bg-brand-green-50 p-6 rounded-2xl border-l-4 border-brand-green-500 mt-6">
                  <p className="text-brand-navy-700 font-medium italic">
                    "{t('about.companyStory.quote')}"
                  </p>
                  <p className="text-brand-green-600 font-semibold mt-2">{t('about.companyStory.author')}</p>
                </div>
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/Gemini_Generated_Image_zgcmsizgcmsizgcm.png"
                alt="GlobalTrustHub Team Story"
                className="rounded-lg shadow-lg w-full max-w-2xl h-auto mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-full p-8 bg-white rounded-lg shadow-md">
                <Target className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-2xl font-bold text-amber-900 mb-4">{t('about.missionVision.mission.title')}</h3>
                <p className="text-amber-700 text-lg">
                  {t('about.missionVision.mission.description')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-full p-8 bg-white rounded-lg shadow-md">
                <Eye className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-2xl font-bold text-amber-900 mb-4">{t('about.missionVision.vision.title')}</h3>
                <p className="text-amber-700 text-lg">
                  {t('about.missionVision.vision.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-4">{t('about.values.title')}</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">{t('about.values.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t('about.values.qualityFirst.title'),
                description: t('about.values.qualityFirst.description'),
              },
              {
                icon: Users,
                title: t('about.values.trustTransparency.title'),
                description: t('about.values.trustTransparency.description'),
              },
              {
                icon: Target,
                title: t('about.values.customerFocus.title'),
                description: t('about.values.customerFocus.description'),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="h-full p-8 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <value.icon className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">{value.title}</h3>
                  <p className="text-amber-700">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
