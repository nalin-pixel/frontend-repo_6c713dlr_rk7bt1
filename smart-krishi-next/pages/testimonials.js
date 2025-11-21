import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Testimonials(){
  const items = [
    { name: 'Ramesh (MP)', text: 'Smart Krishi se fasal ka rog jaldi pata chalta hai.' },
    { name: 'Sita (UP)', text: 'Mandi bhaav aur mausam dono ek jagah milte hain.' },
    { name: 'Karan (RJ)', text: 'Hindi interface bahut asaan hai.' },
  ]
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold">Testimonials</h1>
        <div className="mt-8 grid gap-6">
          {items.map((t)=> (
            <div key={t.name} className="p-6 border rounded-lg">
              <div className="font-medium">{t.name}</div>
              <p className="text-slate-600 mt-2 text-sm">“{t.text}”</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
