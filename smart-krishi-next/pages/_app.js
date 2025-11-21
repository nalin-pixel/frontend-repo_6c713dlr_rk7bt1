import '@/styles/globals.css'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState('en')
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} />
      <main className="flex-1">
        <Component {...pageProps} lang={lang} />
      </main>
      <Footer />
    </div>
  )
}
