const features = [
  {
    title: { en: 'Disease Detection', hi: 'रोग पहचान' },
    desc: { en: 'Use your phone camera to detect crop diseases in seconds.', hi: 'फोन कैमरे से कुछ ही सेकंड में फसल रोग पहचानें।' }
  },
  {
    title: { en: 'Live Weather', hi: 'लाइव मौसम' },
    desc: { en: 'Accurate weather using your location or pinned farm.', hi: 'आपके स्थान के अनुसार सटीक मौसम।' }
  },
  {
    title: { en: 'Mandi Prices', hi: 'मंडी भाव' },
    desc: { en: 'Daily prices for local markets to help you sell better.', hi: 'स्थानीय बाजारों के दैनिक भाव।' }
  },
  {
    title: { en: 'Fertilizer Advisor', hi: 'उर्वरक सलाह' },
    desc: { en: 'Get crop-and-soil based fertilizer recommendation.', hi: 'फसल और मिट्टी के अनुसार उर्वरक सलाह।' }
  },
]

export default function FeaturesGrid({ t, lang }) {
  return (
    <section id="features" className="py-14 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          {t({ en: 'Capabilities', hi: 'क्षमताएँ' }, lang)}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-blue-400/20 bg-slate-900/60 p-5">
              <h3 className="text-white font-semibold">{t(f.title, lang)}</h3>
              <p className="text-blue-200/80 text-sm mt-1">{t(f.desc, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
