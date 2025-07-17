"use client"
import { motion } from "framer-motion"
import { Target, Eye, Users, Award } from "lucide-react"
import Layout from "../../components/layout"

export default function About() {
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
            <h1 className="text-5xl font-bold text-amber-900 mb-6">About GlobalTrustHub</h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Building bridges between Indian excellence and global opportunities
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
              <h2 className="text-4xl font-bold text-amber-900 mb-6">The Heart of Our Mission</h2>
              <p className="text-lg text-amber-700 mb-6">
                Founded with a vision to showcase India's finest products to the world, GlobalTrustHub began as a small
                family business with big dreams. Today, we're proud to be a trusted bridge connecting Indian artisans
                and producers with global markets.
              </p>
              <p className="text-lg text-amber-700 mb-6">
                Our journey started with a simple belief: quality speaks a universal language. From the pristine
                wetlands of Bihar where our premium Makhana is harvested, to the skilled workshops where our handicrafts
                are lovingly created, we ensure every product tells a story of excellence.
              </p>
              <p className="text-lg text-amber-700">
              <span className="text-brand-green-600 font-semibold">
                    "Every piece tells a story of dedication, tradition, and hope,"
                  </span>{" "} Aryan often says. We realized that behind every pair of skilled hands is a family, a community, and a rich cultural heritage that deserves global recognition.
              </p>
              <div className="bg-brand-green-50 p-6 rounded-2xl border-l-4 border-brand-green-500 mt-6">
                  <p className="text-brand-navy-700 font-medium italic">
                    "We don't just export products; we export dreams, traditions, and the skilled hands that create
                    magic from raw materials. Every shipment carries the hopes of artisan families who trust us to
                    showcase their work to the world."
                  </p>
                  <p className="text-brand-green-600 font-semibold mt-2">- Aryan Mittal, Founder & CEO</p>
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
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Mission</h3>
                <p className="text-amber-700 text-lg">
                  To be the most trusted partner in global trade, connecting Indian excellence with international
                  markets while maintaining the highest standards of quality, integrity, and customer satisfaction.
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
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Vision</h3>
                <p className="text-amber-700 text-lg">
                  To create a world where Indian products are recognized globally for their quality and authenticity,
                  fostering cultural exchange and economic growth through sustainable trade practices.
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
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Values</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                description:
                  "We never compromise on quality. Every product is carefully selected and tested to meet international standards.",
              },
              {
                icon: Users,
                title: "Trust & Transparency",
                description:
                  "Building lasting relationships through honest communication and transparent business practices.",
              },
              {
                icon: Target,
                title: "Customer Focus",
                description:
                  "Your success is our success. We're committed to understanding and exceeding your expectations.",
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
