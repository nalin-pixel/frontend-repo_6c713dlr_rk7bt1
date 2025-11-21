import Link from 'next/link'

export default function Navbar({ lang = 'en', setLang }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en)
  const nav = [
    { href: '/', label: t('Home', 'होम') },
    { href: '/features', label: t('Features', 'फीचर्स') },
    { href: '/how-it-works', label: t('How It Works', 'कैसे काम करता है') },
    { href: '/demo', label: t('Demo', 'डेमो') },
    { href: '/pricing', label: t('Pricing', 'कीमत') },
    { href: '/testimonials', label: t('Testimonials', 'प्रशंसापत्र') },
    { href: '/contact', label: t('Contact', 'संपर्क') },
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-green-700">Smart Krishi</Link>
        <div className="hidden md:flex items-center gap-6">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="text-sm hover:text-green-700">{n.label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang?.(lang === 'en' ? 'hi' : 'en')} className="text-sm px-3 py-1 rounded border">
            {t('हिं', 'EN')}
          </button>
        </div>
      </nav>
    </header>
  )
}
