export default async function handler(req, res) {
  const { lat, lon } = req.query
  const key = process.env.OPENWEATHER_API_KEY || 'demo'

  if (key === 'demo') {
    return res.status(200).json({
      main: { temp: 29, humidity: 62 },
      weather: [{ main: 'Clouds' }],
      demo: true
    })
  }

  try {
    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
    const data = await r.json()
    return res.status(200).json(data)
  } catch (e) {
    return res.status(500).json({ error: 'weather_fetch_failed', details: String(e) })
  }
}
