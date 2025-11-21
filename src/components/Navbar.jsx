import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navItems = [
  { to: '/', label: { en: 'Home', hi: 'होम' } },
  { to: '/features', label: { en: 'Features', hi: 'विशेषताएँ' } },
  { to: '/how-it-works', label: { en: 'How It Works', hi: 'कैसे काम करता है' } },
  { to: '/demo', label: { en: 'Demo', hi: 'डेमो' } },
  { to: '/pricing', label: { en: 'Pricing', hi: 'कीमत' } },
  { to: '/testimonials', label: { en: 'Testimonials', hi: 'प्रशंसापत्र' } },
  { to: '/contact', label: { en: 'Contact', hi: 'संपर्क' } },
]

function t(obj, lang) {
  if (!obj) return ''
  return lang === 'hi' ? obj.hi : obj.en
}

export default function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-900/80 border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Smart Krishi" className="w-8 h-8" />
            <span className="font-bold text-white text-lg">Smart Krishi</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm ${isActive ? 'text-white' : 'text-blue-200/90 hover:text-white'} transition-colors`
                }
              >
                {t(item.label, lang)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="px-3 py-1.5 text-xs font-medium rounded-md bg-blue-500/10 text-blue-200 hover:bg-blue-500/20 border border-blue-400/30"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'हिंदी' : 'EN'}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-700 text-slate-200"
              aria-label="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md ${isActive ? 'bg-blue-500/20 text-white' : 'text-blue-100 hover:bg-slate-700/40'}`
                  }
                >
                  {t(item.label, lang)}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
