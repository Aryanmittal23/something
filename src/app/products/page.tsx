"use client"
import { motion } from "framer-motion"
import { Star, Leaf, Award, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'

export default function Products() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: t('products.products.premiumMakhana.name'),
      category: t('products.categories.foxNuts'),
      description: t('products.products.premiumMakhana.description'),
      image: "/makhana.jpg",
      features: [
        t('products.features.organicCertified'),
        t('products.features.highProtein'),
        t('products.features.glutenFree'),
        t('products.features.lowCalorie')
      ],
      origin: "Bihar, India",
      rating: 4.9,
    },
    {
      id: 2,
      name: t('products.products.roastedMakhana.name'),
      category: t('products.categories.foxNuts'),
      description: t('products.products.roastedMakhana.description'),
      image: "/roasted-makhana.jpg",
      features: [
        t('products.features.spiced'),
        t('products.features.readyToEat'),
        t('products.features.noPreservatives'),
        t('products.features.traditionalRecipe')
      ],
      origin: "Bihar, India",
      rating: 4.8,
    },
    {
      id: 3,
      name: t('products.products.handwovenTextiles.name'),
      category: t('products.categories.handicrafts'),
      description: t('products.products.handwovenTextiles.description'),
      image: "/textiles.jpg",
      features: [
        t('products.features.handwoven'),
        t('products.features.naturalDyes'),
        t('products.features.traditionalPatterns'),
        t('products.features.ecoFriendly')
      ],
      origin: "Rajasthan, India",
      rating: 4.9,
    },
    {
      id: 4,
      name: t('products.products.brassArtifacts.name'),
      category: t('products.categories.handicrafts'),
      description: t('products.products.brassArtifacts.description'),
      image: "/brass-artifacts.jpg",
      features: [
        t('products.features.handcrafted'),
        t('products.features.pureBrass'),
        t('products.features.traditionalDesign'),
        t('products.features.antiqueFinish')
      ],
      origin: "Uttar Pradesh, India",
      rating: 4.3,
    },
    {
      id: 5,
      name: t('products.products.woodenSculptures.name'),
      category: t('products.categories.handicrafts'),
      description: t('products.products.woodenSculptures.description'),
      image: "/wooden-sculptures.jpg",
      features: [
        t('products.features.handCarved'),
        t('products.features.sustainableWood'),
        t('products.features.culturalHeritage'),
        t('products.features.uniquePieces')
      ],
      origin: "Karnataka, India",
      rating: 4.2,
    },
    {
      id: 6,
      name: t('products.products.ceramicPottery.name'),
      category: t('products.categories.handicrafts'),
      description: t('products.products.ceramicPottery.description'),
      image: "/ceramic-pottery.jpg",
      features: [
        t('products.features.handPainted'),
        t('products.features.leadFree'),
        t('products.features.microwaveSafe'),
        t('products.features.artisticDesign')
      ],
      origin: "Gujarat, India",
      rating: 4.6,
    },
  ]

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
            <h1 className="text-5xl font-bold text-amber-900 mb-6">{t('products.hero.title')}</h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              {t('products.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* <Card className="h-full hover:shadow-xl transition-all duration-300 group"> */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* <Badge className="absolute top-4 left-4 bg-amber-600 text-white">{product.category}</Badge> */}
                  </div>
                  {/* <CardContent className="p-6"> */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-amber-900">{product.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-amber-700">{product.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Globe className="w-4 h-4 text-amber-600" />
                      <span className="text-sm text-amber-600">{product.origin}</span>
                    </div>

                    <p className="text-amber-700 mb-4 text-sm">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature, idx) => (
                        // <Badge key={idx} variant="outline" className="text-xs">
                        //   {feature}
                        // </Badge>
                        <span key={idx} className="border border-amber-600 text-xs px-2 py-1 rounded text-amber-600 bg-amber-50">{feature}</span>
                      ))}
                    </div>

                    {/* <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Request Quote</Button> */}
                    <button
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded"
                      onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}`)}
                    >
                      {t('products.requestQuote')}
                    </button>
                  {/* </CardContent> */}
                {/* </Card> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-4">{t('products.qualityAssurance.title')}</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              {t('products.qualityAssurance.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: t('products.qualityAssurance.organic.title'),
                description: t('products.qualityAssurance.organic.description'),
              },
              {
                icon: Award,
                title: t('products.qualityAssurance.certified.title'),
                description: t('products.qualityAssurance.certified.description'),
              },
              {
                icon: Globe,
                title: t('products.qualityAssurance.exportReady.title'),
                description: t('products.qualityAssurance.exportReady.description'),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* <Card className="text-center h-full"> */}
                  {/* <CardContent className="p-8"> */}
                    <feature.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">{feature.title}</h3>
                    <p className="text-amber-700">{feature.description}</p>
                  {/* </CardContent> */}
                {/* </Card> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
