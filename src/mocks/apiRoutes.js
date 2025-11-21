// Lightweight mock API for the Vite preview environment
export function registerMockApi() {
  if (window.__smartKrishiMocked) return
  window.__smartKrishiMocked = true

  const mkJson = (obj) => new Response(JSON.stringify(obj), { headers: { 'Content-Type': 'application/json' } })

  const originalFetch = window.fetch.bind(window)
  window.fetch = async (input, init) => {
    const url = typeof input === 'string' ? input : input.url

    // Mock disease detection
    if (url.startsWith('/api/detect-disease-demo')) {
      return mkJson({
        model: 'demo',
        disease: 'Leaf Rust',
        confidence: 0.88,
        advice: 'Remove heavily infected leaves and apply triazole fungicide.',
      })
    }

    // Mock weather
    if (url.startsWith('/api/weather-demo')) {
      const u = new URL(url, window.location.origin)
      const lat = Number(u.searchParams.get('lat') || 23.2599)
      const lon = Number(u.searchParams.get('lon') || 77.4126)
      return mkJson({
        source: 'demo',
        coords: { lat, lon },
        weather: {
          temp: 30.4,
          feels_like: 31.2,
          humidity: 57,
          wind_speed: 3.2,
          description: 'clear sky',
        },
        location: 'Bhopal, MP',
      })
    }

    // Mock mandi
    if (url.startsWith('/api/mandi-demo')) {
      return mkJson({
        state: 'Madhya Pradesh',
        district: 'Bhopal',
        date: new Date().toISOString().slice(0, 10),
        prices: [
          { commodity: 'Wheat', min: 1900, max: 2150, modal: 2050, unit: 'Rs/Quintal' },
          { commodity: 'Soybean', min: 4200, max: 4600, modal: 4450, unit: 'Rs/Quintal' },
        ],
      })
    }

    // Mock fertilizer
    if (url.startsWith('/api/fertilizer-demo')) {
      return mkJson({
        crop: 'Wheat',
        soilType: 'Loam',
        recommendation: {
          N: '120 kg/ha',
          P2O5: '60 kg/ha',
          K2O: '40 kg/ha',
          note: 'Split N into 3 doses: basal, tillering, booting',
        },
      })
    }

    return originalFetch(input, init)
  }
}
