import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeHero from './components/sections/HomeHero'
import FeaturesGrid from './components/sections/FeaturesGrid'
import DemoQuickActions from './components/sections/DemoQuickActions'
import CameraDemo from './components/sections/CameraDemo'

function t(obj, lang) {
  if (!obj) return ''
  return lang === 'hi' ? obj.hi : obj.en
}

function Home({ lang }) {
  return (
    <main>
      <HomeHero t={t} lang={lang} />
      <FeaturesGrid t={t} lang={lang} />
      <CameraDemo t={t} lang={lang} />
      <DemoQuickActions t={t} lang={lang} />
    </main>
  )
}

function Placeholder({ title }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="mt-2 text-blue-200/80">This section mirrors the Next.js page in this preview.</p>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('en')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-100">
      <BrowserRouter>
        <Navbar lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/features" element={<Placeholder title="Features" />} />
          <Route path="/how-it-works" element={<Placeholder title="How It Works" />} />
          <Route path="/demo" element={<Home lang={lang} />} />
          <Route path="/pricing" element={<Placeholder title="Pricing" />} />
          <Route path="/testimonials" element={<Placeholder title="Testimonials" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
