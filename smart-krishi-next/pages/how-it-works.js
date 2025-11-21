import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function How(){
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 prose">
        <h1>How It Works</h1>
        <ol>
          <li>Open the demo and allow location for weather.</li>
          <li>Use camera or gallery to upload a leaf image.</li>
          <li>Check mandi prices by choosing state and district.</li>
          <li>Enter crop and soil type for fertilizer advice.</li>
        </ol>
      </main>
      <Footer />
    </div>
  )
}
