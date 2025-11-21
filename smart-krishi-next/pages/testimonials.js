export default function Testimonials({ lang = 'en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en)
  const items = [
    { name: 'Ramesh', place: 'UP', text: t('Saved ₹3000 by disease detection.', 'रोग पहचान से ₹3000 बचे।') },
    { name: 'Sita', place: 'MP', text: t('Timely weather alert protected crops.', 'समय पर मौसम अलर्ट से फसल बची।') },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-6">
      {items.map((x, i) => (
        <div key={i} className="p-6 bg-white rounded-lg border">
          <div className="font-semibold">{x.name}, {x.place}</div>
          <p className="text-gray-700 mt-2">“{x.text}”</p>
        </div>
      ))}
    </div>
  )
}
