import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-2 text-center">Contact Us</h1>
        <p className="text-amber-700 mb-8 text-center">We'd love to hear from you! Fill out the form below or reach us directly.</p>
        <form
          action="https://formspree.io/f/myzpzybq"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Type your message here..."
              required
            />
          </div>
          {/* Optional: Add a hidden input for reply-to */}
          <input type="hidden" name="_replyto" />
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 border-t pt-6">
          <h2 className="text-lg font-semibold text-amber-900 mb-4">Contact Information</h2>
          <div className="space-y-3">
            <a href="mailto:info@globaltrusthub.com" className="flex items-center space-x-3 hover:underline group" aria-label="Email">
              <Mail className="text-amber-600 group-hover:text-amber-800 transition-colors" size={18} />
              <span className="text-amber-700">info@globaltrusthub.com</span>
            </a>
            <a href="tel:+918109663368" className="flex items-center space-x-3 hover:underline group" aria-label="Phone">
              <Phone className="text-amber-600 group-hover:text-amber-800 transition-colors" size={18} />
              <span className="text-amber-700">+91 8109663368</span>
            </a>
            <a href="https://www.google.com/maps/place/Sheopur,+Madhya+Pradesh,+India" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:underline group" aria-label="Location">
              <MapPin className="text-amber-600 group-hover:text-amber-800 transition-colors" size={18} />
              <span className="text-amber-700">Sheopur, India</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 