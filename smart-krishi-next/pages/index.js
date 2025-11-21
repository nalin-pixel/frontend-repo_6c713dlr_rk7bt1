export default function Home({ lang = 'en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en)
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-green-700 text-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">{t('Smart Krishi – India\'s AI Farming Assistant', 'स्मार्ट कृषि – भारत का एआई खेती सहायक')}</h1>
        <p className="mt-4 text-lg">{t('Helping farmers with AI crop diagnosis, mandi rates & weather alerts.', 'एआई निदान, मंडी भाव और मौसम अलर्ट के साथ किसानों की मदद।')}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="bg-white text-green-700 px-4 py-2 rounded">{t('Download App', 'ऐप डाउनलोड करें')}</button>
          <button className="bg-yellow-400 text-white px-4 py-2 rounded">{t('Try WhatsApp Bot', 'व्हाट्सएप बॉट आज़माएं')}</button>
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: t('AI Disease Detection', 'एआई रोग पहचान'), desc: t('Camera + Gallery diagnosis', 'कैमरा + गैलरी निदान') },
          { title: t('Weather Alerts', 'मौसम अलर्ट'), desc: t('Auto location updates', 'ऑटो लोकेशन अपडेट') },
          { title: t('Mandi Prices', 'मंडी भाव'), desc: t('Live and demo prices', 'लाइव और डेमो भाव') },
          { title: t('Fertilizer Guide', 'उर्वरक मार्गदर्शिका'), desc: t('Crop specific plan', 'फसल-विशेष योजना') },
        ].map((f) => (
          <div key={f.title} className="p-5 border rounded-lg bg-white shadow-sm">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
