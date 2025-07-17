"use client"
import { motion } from "framer-motion"
import { Star, Leaf, Award, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"

export default function Products() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Premium Makhana",
      category: "Fox Nuts",
      description:
        "Organic, hand-picked fox nuts from Bihar's pristine wetlands. Rich in protein, low in calories, and perfect for healthy snacking.",
      image: "/makhana.jpg",
      features: ["Organic Certified", "High Protein", "Gluten Free", "Low Calorie"],
      origin: "Bihar, India",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Roasted Makhana",
      category: "Fox Nuts",
      description:
        "Perfectly roasted fox nuts with traditional Indian spices. A healthy alternative to conventional snacks.",
      image: "/roasted-makhana.jpg",
      features: ["Spiced", "Ready to Eat", "No Preservatives", "Traditional Recipe"],
      origin: "Bihar, India",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Handwoven Textiles",
      category: "Handicrafts",
      description: "Exquisite handwoven textiles showcasing traditional Indian craftsmanship and vibrant colors.",
      image: "/textiles.jpg",
      features: ["Handwoven", "Natural Dyes", "Traditional Patterns", "Eco-Friendly"],
      origin: "Rajasthan, India",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Brass Artifacts",
      category: "Handicrafts",
      description: "Authentic brass artifacts crafted by skilled artisans, perfect for home decoration and gifting.",
      image: "/brass-artifacts.jpg",
      features: ["Handcrafted", "Pure Brass", "Traditional Design", "Antique Finish"],
      origin: "Uttar Pradesh, India",
      rating: 4.3,
    },
    {
      id: 5,
      name: "Wooden Sculptures",
      category: "Handicrafts",
      description: "Intricately carved wooden sculptures representing Indian mythology and cultural heritage.",
      image: "/wooden-sculptures.jpg",
      features: ["Hand Carved", "Sustainable Wood", "Cultural Heritage", "Unique Pieces"],
      origin: "Karnataka, India",
      rating: 4.2,
    },
    {
      id: 6,
      name: "Ceramic Pottery",
      category: "Handicrafts",
      description: "Beautiful ceramic pottery with traditional glazes and modern designs for contemporary homes.",
      image: "/ceramic-pottery.jpg",
      features: ["Hand Painted", "Lead Free", "Microwave Safe", "Artistic Design"],
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
            <h1 className="text-5xl font-bold text-amber-900 mb-6">Our Premium Products</h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Discover the finest Indian products, carefully selected and quality-assured for global markets
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
                      Request Quote
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
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Quality You Can Trust</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Every product undergoes rigorous quality checks to meet international standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Organic & Natural",
                description: "All our products are sourced from organic farms and natural materials",
              },
              {
                icon: Award,
                title: "Certified Quality",
                description: "International certifications ensure our products meet global standards",
              },
              {
                icon: Globe,
                title: "Export Ready",
                description: "Properly packaged and documented for smooth international shipping",
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
