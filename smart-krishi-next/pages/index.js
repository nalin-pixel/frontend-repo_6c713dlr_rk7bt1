import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home(){
  const [lang, setLang] = useState('en')

  const t = (en, hi) => lang === 'en' ? en : hi

  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {t('AI-powered farming assistant', 'AI-संचालित कृषि सहायक')}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {t('Detect crop disease, check weather, mandi prices, and fertilizer recommendations.', 'फसल रोग पहचानें, मौसम, मंडी भाव और उर्वरक सुझाव देखें।')}
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/demo" className="px-5 py-3 rounded-md bg-primary-600 text-white">{t('Try Demo', 'डेमो देखें')}</a>
            <button onClick={()=>setLang(lang==='en'?'hi':'en')} className="px-5 py-3 rounded-md border">
              {lang==='en' ? 'हिंदी' : 'English'}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
