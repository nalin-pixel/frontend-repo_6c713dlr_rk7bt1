import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Features(){
  const features = [
    { title: 'Disease Detection', desc: 'Upload leaf photo to detect possible diseases with treatment tips.' },
    { title: 'Weather', desc: 'Auto-location and 7-day forecast powered by OpenWeather.' },
    { title: 'Mandi Prices', desc: 'District-wise mandi prices for major crops.' },
    { title: 'Fertilizer Advice', desc: 'Crop and soil-based fertilizer recommendations.' },
    { title: 'Bilingual', desc: 'Hindi + English interface for wider reach.' },
  ]
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold">Features</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {features.map((f)=> (
            <div key={f.title} className="p-6 border rounded-lg">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
