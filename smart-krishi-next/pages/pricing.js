export default function Pricing({ lang = 'en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en)
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-6">
      <div className="p-6 bg-white rounded-lg border">
        <h3 className="text-xl font-semibold">{t('Free Plan', 'फ्री प्लान')}</h3>
        <ul className="mt-3 list-disc pl-6 text-gray-700">
          <li>{t('Weather + Mandi + Schemes', 'मौसम + मंडी + योजनाएँ')}</li>
        </ul>
      </div>
      <div className="p-6 bg-white rounded-lg border">
        <h3 className="text-xl font-semibold">{t('Pro Plan', 'प्रो प्लान')}</h3>
        <ul className="mt-3 list-disc pl-6 text-gray-700">
          <li>{t('AI disease + fertilizer + offline mode', 'एआई रोग + उर्वरक + ऑफ़लाइन मोड')}</li>
        </ul>
        <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded">{t('Buy Now', 'अभी खरीदें')}</button>
      </div>
    </div>
  )
}
