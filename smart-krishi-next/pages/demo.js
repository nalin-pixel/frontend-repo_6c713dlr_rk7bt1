import { useEffect, useState } from 'react'

export default function Demo({ lang = 'en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en)
  const [image, setImage] = useState(null)
  const [result, setResult] = useState(null)
  const [weather, setWeather] = useState(null)
  const [mandi, setMandi] = useState(null)
  const [fert, setFert] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {
    if (!image) return
    setLoading(true)
    const fd = new FormData()
    fd.append('image', image)
    fd.append('crop', 'Wheat')
    const res = await fetch('/api/detect-disease', { method: 'POST', body: fd })
    const data = await res.json()
    setResult(data)
    setLoading(false)
  }

  const fetchWeather = () => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords
      const r = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`)
      setWeather(await r.json())
    })
  }

  const fetchMandi = async () => {
    const r = await fetch('/api/mandi?state=MP&district=Bhopal')
    setMandi(await r.json())
  }

  const fetchFert = async () => {
    const r = await fetch('/api/fertilizer', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ crop: 'Wheat', soilType: 'Loam' }) })
    setFert(await r.json())
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-8">
      <div className="p-6 bg-white rounded-lg border">
        <h2 className="font-semibold">{t('Disease Detection', 'रोग पहचान')}</h2>
        <input type="file" accept="image/*" capture="environment" onChange={(e) => setImage(e.target.files?.[0] || null)} className="mt-3" />
        <button onClick={handleUpload} disabled={!image || loading} className="ml-3 px-4 py-2 bg-green-700 text-white rounded">
          {loading ? t('Analyzing...', 'विश्लेषण हो रहा है...') : t('Analyze', 'विश्लेषण करें')}
        </button>
        {result && (
          <pre className="mt-4 bg-gray-50 p-3 rounded text-sm overflow-auto">{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>

      <div className="p-6 bg-white rounded-lg border">
        <h2 className="font-semibold">{t('Weather Demo', 'मौसम डेमो')}</h2>
        <button onClick={fetchWeather} className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">{t('Get Weather', 'मौसम लाएँ')}</button>
        {weather && <pre className="mt-4 bg-gray-50 p-3 rounded text-sm overflow-auto">{JSON.stringify(weather, null, 2)}</pre>}
      </div>

      <div className="p-6 bg-white rounded-lg border">
        <h2 className="font-semibold">{t('Mandi Demo', 'मंडी डेमो')}</h2>
        <button onClick={fetchMandi} className="mt-3 px-4 py-2 bg-amber-600 text-white rounded">{t('Get Prices', 'भाव लाएँ')}</button>
        {mandi && <pre className="mt-4 bg-gray-50 p-3 rounded text-sm overflow-auto">{JSON.stringify(mandi, null, 2)}</pre>}
      </div>

      <div className="p-6 bg-white rounded-lg border">
        <h2 className="font-semibold">{t('Fertilizer Demo', 'उर्वरक डेमो')}</h2>
        <button onClick={fetchFert} className="mt-3 px-4 py-2 bg-purple-600 text-white rounded">{t('Get Plan', 'योजना लाएँ')}</button>
        {fert && <pre className="mt-4 bg-gray-50 p-3 rounded text-sm overflow-auto">{JSON.stringify(fert, null, 2)}</pre>}
      </div>
    </div>
  )
}
