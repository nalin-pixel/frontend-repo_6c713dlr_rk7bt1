import { useState } from 'react'

export default function DemoQuickActions({ t, lang }) {
  const [weather, setWeather] = useState(null)
  const [mandi, setMandi] = useState(null)
  const [fert, setFert] = useState(null)

  const handleWeather = async () => {
    try {
      const fallback = { lat: 23.2599, lon: 77.4126 }
      const getPos = () => new Promise((resolve) => {
        if (!navigator.geolocation) return resolve(fallback)
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
          () => resolve(fallback),
          { enableHighAccuracy: true, timeout: 3000 }
        )
      })
      const { lat, lon } = await getPos()
      // Mocked payload (matches Next.js API schema)
      const data = {
        source: 'demo',
        coords: { lat, lon },
        weather: {
          temp: 30.2,
          feels_like: 31.0,
          humidity: 58,
          wind_speed: 3.6,
          description: 'clear sky',
        },
        location: 'Your farm location',
      }
      // Simulate latency
      await new Promise((r) => setTimeout(r, 500))
      setWeather(data)
    } catch (e) {
      setWeather({ error: e.message })
    }
  }

  const handleMandi = async () => {
    const data = {
      state: 'Madhya Pradesh',
      district: 'Bhopal',
      date: new Date().toISOString().slice(0, 10),
      prices: [
        { commodity: 'Wheat', min: 1900, max: 2150, modal: 2050, unit: 'Rs/Quintal' },
        { commodity: 'Soybean', min: 4200, max: 4600, modal: 4450, unit: 'Rs/Quintal' },
      ],
    }
    await new Promise((r) => setTimeout(r, 400))
    setMandi(data)
  }

  const handleFert = async () => {
    const data = {
      crop: 'Wheat',
      soilType: 'Loam',
      recommendation: {
        N: '120 kg/ha',
        P2O5: '60 kg/ha',
        K2O: '40 kg/ha',
        note: 'Split N into 3 doses: basal, tillering, booting',
      },
    }
    await new Promise((r) => setTimeout(r, 400))
    setFert(data)
  }

  return (
    <section className="py-14 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">{t({ en: 'Try quick demos', hi: 'त्वरित डेमो आज़माएं' }, lang)}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-blue-400/20 bg-slate-900/60 p-5">
            <h3 className="text-white font-semibold">{t({ en: 'Weather', hi: 'मौसम' }, lang)}</h3>
            <p className="text-blue-200/80 text-sm mt-1">{t({ en: 'Uses your location if allowed, else a demo.', hi: 'इजाजत मिले तो स्थान, अन्यथा डेमो।' }, lang)}</p>
            <button onClick={handleWeather} className="mt-4 px-4 py-2 bg-blue-500 rounded-md text-white">{t({ en: 'Get Weather', hi: 'मौसम दिखाएँ' }, lang)}</button>
            {weather && (
              <pre className="mt-3 text-xs bg-slate-800/80 p-3 rounded-lg overflow-auto max-h-48">{JSON.stringify(weather, null, 2)}</pre>
            )}
          </div>

          <div className="rounded-xl border border-blue-400/20 bg-slate-900/60 p-5">
            <h3 className="text-white font-semibold">{t({ en: 'Mandi Prices', hi: 'मंडी भाव' }, lang)}</h3>
            <p className="text-blue-200/80 text-sm mt-1">{t({ en: 'Bhopal, MP demo prices', hi: 'भोपाल, म. प्र. डेमो भाव' }, lang)}</p>
            <button onClick={handleMandi} className="mt-4 px-4 py-2 bg-blue-500 rounded-md text-white">{t({ en: 'Get Prices', hi: 'भाव दिखाएँ' }, lang)}</button>
            {mandi && (
              <pre className="mt-3 text-xs bg-slate-800/80 p-3 rounded-lg overflow-auto max-h-48">{JSON.stringify(mandi, null, 2)}</pre>
            )}
          </div>

          <div className="rounded-xl border border-blue-400/20 bg-slate-900/60 p-5">
            <h3 className="text-white font-semibold">{t({ en: 'Fertilizer', hi: 'उर्वरक' }, lang)}</h3>
            <p className="text-blue-200/80 text-sm mt-1">{t({ en: 'Wheat + Loam demo recommendation', hi: 'गेहूं + दोमट डेमो सलाह' }, lang)}</p>
            <button onClick={handleFert} className="mt-4 px-4 py-2 bg-blue-500 rounded-md text-white">{t({ en: 'Get Plan', hi: 'सलाह दिखाएँ' }, lang)}</button>
            {fert && (
              <pre className="mt-3 text-xs bg-slate-800/80 p-3 rounded-lg overflow-auto max-h-48">{JSON.stringify(fert, null, 2)}</pre>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
