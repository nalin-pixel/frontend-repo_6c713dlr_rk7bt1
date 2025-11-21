export default function HowItWorks({ lang = 'en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en)
  const steps = [
    t('Crop selection', 'फसल चयन'),
    t('AI analysis (soil, weather, disease)', 'एआई विश्लेषण (मिट्टी, मौसम, रोग)'),
    t('Personalized advice', 'व्यक्तिगत सलाह'),
    t('Photo upload (optional)', 'फोटो अपलोड (वैकल्पिक)'),
    t('Auto alerts', 'ऑटो अलर्ट'),
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <ol className="flex flex-col md:flex-row gap-6">
        {steps.map((s, i) => (
          <li key={i} className="flex-1 p-6 bg-white rounded-lg border shadow-sm">
            <div className="text-2xl font-bold text-green-700">{i + 1}</div>
            <div className="mt-2">{s}</div>
          </li>
        ))}
      </ol>
    </div>
  )
}
