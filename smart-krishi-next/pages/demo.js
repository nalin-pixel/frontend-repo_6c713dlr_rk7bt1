import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Demo(){
  const [weather, setWeather] = useState(null)
  const [mandi, setMandi] = useState([])
  const [fert, setFert] = useState(null)
  const [detect, setDetect] = useState(null)
  const cameraRef = useRef()

  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos)=>{
        const { latitude, longitude } = pos.coords
        const res = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`)
        const data = await res.json()
        setWeather(data)
      })
    }
  },[])

  const handleMandi = async () => {
    const res = await fetch('/api/mandi?state=MP&district=Bhopal')
    const data = await res.json()
    setMandi(data)
  }

  const handleFert = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const res = await fetch('/api/fertilizer', { method: 'POST', body: JSON.stringify({ crop: form.get('crop'), soilType: form.get('soil') }), headers: { 'Content-Type': 'application/json' } })
    const data = await res.json()
    setFert(data)
  }

  const handleDetect = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const fd = new FormData()
    fd.append('image', file)
    fd.append('crop', 'Wheat')
    const res = await fetch('/api/detect-disease', { method: 'POST', body: fd })
    const data = await res.json()
    setDetect(data)
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold">Live Demo</h1>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="p-4 border rounded-lg">
            <h2 className="font-medium">Camera / Gallery Upload</h2>
            <input type="file" accept="image/*" capture="environment" onChange={handleDetect} className="mt-3" />
            <input type="file" accept="image/*" onChange={handleDetect} className="mt-3 block" />
            {detect && (
              <pre className="mt-4 bg-slate-50 p-3 rounded text-sm overflow-auto">{JSON.stringify(detect, null, 2)}</pre>
            )}
          </div>

          <div className="p-4 border rounded-lg">
            <h2 className="font-medium">Weather (auto-location)</h2>
            {weather ? (
              <div className="mt-3 text-sm">
                <div>Temp: {weather?.main?.temp}°C</div>
                <div>Humidity: {weather?.main?.humidity}%</div>
                <div>Sky: {weather?.weather?.[0]?.main}</div>
              </div>
            ) : (
              <p className="text-sm text-slate-500">Waiting for location permission...</p>
            )}
          </div>

          <div className="p-4 border rounded-lg">
            <h2 className="font-medium">Mandi Prices</h2>
            <button onClick={handleMandi} className="mt-3 px-4 py-2 bg-primary-600 text-white rounded">Fetch MP/Bhopal</button>
            {mandi?.length > 0 && (
              <ul className="mt-4 text-sm list-disc pl-5">
                {mandi.map((m, i)=> (
                  <li key={i}>{m.crop} — ₹{m.price}/qtl</li>
                ))}
              </ul>
            )}
          </div>

          <div className="p-4 border rounded-lg">
            <h2 className="font-medium">Fertilizer Recommendation</h2>
            <form onSubmit={handleFert} className="mt-3 flex gap-3">
              <input name="crop" placeholder="Crop (e.g., Wheat)" className="border px-3 py-2 rounded w-full" />
              <input name="soil" placeholder="Soil Type (e.g., Loamy)" className="border px-3 py-2 rounded w-full" />
              <button className="px-4 py-2 bg-primary-600 text-white rounded">Get</button>
            </form>
            {fert && (
              <pre className="mt-4 bg-slate-50 p-3 rounded text-sm overflow-auto">{JSON.stringify(fert, null, 2)}</pre>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
