"use client"
import { Link } from "react-router-dom";
import { Award, Users, Target, Globe, Shield, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-cream-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-24 px-4">
        {/* No background image or overlay */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">Welcome to GlobalTrustHub</h1>
          <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Where Indian Quality Meets the World.<br />
            <span className="block mt-4 text-lg md:text-xl text-amber-800">
              At GlobalTrustHub, we are dedicated to connecting the finest Indian products with customers across the globe. Our mission is to showcase the rich heritage, craftsmanship, and natural bounty of India through our premium exports. Whether it's nutrient-rich Makhana from Bihar, exquisite handwoven textiles, or authentic handicrafts, we ensure every product reflects our commitment to quality and trust.
            </span>
            <span className="block mt-4 text-lg md:text-xl text-amber-800">
              As a new and passionate team in the export industry, we may be at the beginning of our journey, but our dedication to customer satisfaction and ethical business practices is unwavering. We believe in building lasting relationships and delivering value with every shipment.
            </span>
            <span className="block mt-4 text-lg md:text-xl text-amber-800">
              Discover our range of products and experience the best of India—exported with care, integrity, and a personal touch.
            </span>
          </p>
          <Link
            to="/products"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition-colors"
          >
            Explore Products
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-10 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Premium Makhana",
                image: "/makhana.jpg",
              },
              {
                name: "Handwoven Textiles",
                image: "/textiles.jpg",
              },
              {
                name: "Brass Artifacts",
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
          <h2 className="text-3xl font-bold text-amber-900 mb-10 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-amber-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Fresh Perspective</h3>
              <p className="text-amber-700">As a new company, we bring energy, innovation, and a modern approach to every partnership.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-amber-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Honesty & Dedication</h3>
              <p className="text-amber-700">We may not have decades of experience, but we make up for it with honesty, hard work, and a genuine desire to deliver value.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Customer Focus</h3>
              <p className="text-amber-700">Your trust means everything to us. We listen, adapt, and go the extra mile to ensure your satisfaction at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-10 text-center">Our Values</h2>
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
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Ready to Connect?</h2>
          <p className="text-lg text-amber-700 mb-8">
            Have questions or want to start your export journey? Reach out to us and our team will get back to you promptly.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
