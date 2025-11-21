export default function Features({ lang = 'en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en)
  const sections = [
    { title: t('AI Disease Detection', 'एआई रोग पहचान'), desc: t('Use camera or gallery to detect crop diseases.', 'कैमरा या गैलरी से फसल रोग पहचानें।') },
    { title: t('Weather Alerts', 'मौसम अलर्ट'), desc: t('Auto-detect your location for forecasts.', 'पूर्वानुमान के लिए लोकेशन ऑटो-डिटेक्ट।') },
    { title: t('Mandi Prices', 'मंडी भाव'), desc: t('Check prices by state/district.', 'राज्य/जिले के हिसाब से भाव देखें।') },
    { title: t('Fertilizer Guide', 'उर्वरक मार्गदर्शिका'), desc: t('Get personalized fertilizer plans.', 'व्यक्तिगत उर्वरक योजना प्राप्त करें।') },
    { title: t('Government Schemes', 'सरकारी योजनाएँ'), desc: t('Curated schemes and eligibility.', 'योजनाएँ और पात्रता।') },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-6">
      {sections.map(s => (
        <div key={s.title} className="p-6 bg-white rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold">{s.title}</h2>
          <p className="text-gray-600 mt-1">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
