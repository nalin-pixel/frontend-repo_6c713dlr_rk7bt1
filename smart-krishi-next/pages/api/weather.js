export default async function handler(req, res) {
  const { lat, lon } = req.query
  const key = process.env.OPENWEATHER_API_KEY
  if (!key) {
    return res.status(200).json({ demo: true, temp: 28, desc: 'Sunny', lat, lon })
  }
  try {
    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
    const data = await r.json()
    res.status(200).json(data)
  } catch (e) {
    res.status(500).json({ error: 'Weather fetch failed' })
  }
}
