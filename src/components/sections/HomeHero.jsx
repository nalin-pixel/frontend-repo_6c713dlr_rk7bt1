export default function HomeHero({ t, lang }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.15),transparent_30%)] pointer-events-none"/>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              {t({ en: 'Smart Farming for Every Indian Farmer', hi: 'हर भारतीय किसान के लिए स्मार्ट खेती' }, lang)}
            </h1>
            <p className="mt-5 text-blue-200/90 text-lg">
              {t({ en: 'Instant disease detection, live weather, mandi prices and fertilizer advisory — all in one place.', hi: 'रोग पहचान, मौसम, मंडी भाव और उर्वरक सलाह — सब एक ही जगह।' }, lang)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/demo" className="px-5 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
                {t({ en: 'Try Demo', hi: 'डेमो आज़माएं' }, lang)}
              </a>
              <a href="#features" className="px-5 py-3 rounded-lg border border-blue-300/40 text-blue-100 hover:bg-blue-500/10 transition">
                {t({ en: 'Explore Features', hi: 'विशेषताएँ देखें' }, lang)}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-blue-400/20 bg-gradient-to-br from-slate-800 to-slate-900 p-3">
              <div className="w-full h-full rounded-xl bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center"/>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-md shadow-lg">Demo</div>
          </div>
        </div>
      </div>
    </section>
  )
}
