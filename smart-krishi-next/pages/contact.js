import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact(){
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <form className="mt-6 grid gap-4">
          <input className="border px-3 py-2 rounded" placeholder="Name" />
          <input className="border px-3 py-2 rounded" placeholder="Email" />
          <textarea className="border px-3 py-2 rounded" placeholder="Message" rows={5} />
          <button className="px-4 py-2 bg-primary-600 text-white rounded w-fit">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
