import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Pricing(){
  const tiers = [
    { name: 'Free', price: '₹0', features: ['Demo APIs', 'Community support'] },
    { name: 'Pro', price: '₹299/mo', features: ['AI detection', 'Priority support', 'Unlimited uploads'] },
    { name: 'Enterprise', price: 'Contact', features: ['Custom models', 'SLA', 'On-prem options'] },
  ]
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold">Pricing</h1>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t)=> (
            <div key={t.name} className="p-6 border rounded-lg">
              <h3 className="font-semibold">{t.name}</h3>
              <div className="text-3xl font-bold mt-2">{t.price}</div>
              <ul className="mt-4 text-sm list-disc pl-5">
                {t.features.map((f)=> <li key={f}>{f}</li>)}
              </ul>
              <button className="mt-6 px-4 py-2 bg-primary-600 text-white rounded">Select</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
