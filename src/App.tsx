import './App.css'
import Layout from './components/layout'
import { Routes, Route } from 'react-router-dom'
import About from './app/about/page'
import Products from './app/products/page'
import Contact from './app/contact/page'
import ExportProcess from './app/export-process/page'
import Home from './app/page'
import Certificates from './app/certificates/page'
import PrivacyPolicy from './app/privacy-policy/page'
import Terms from './app/terms/page'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/export-process" element={<ExportProcess />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
