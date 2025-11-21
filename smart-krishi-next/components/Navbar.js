import Link from 'next/link'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-primary-700 text-xl">Smart Krishi</Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/features" className="hover:text-primary-700">Features</Link>
          <Link href="/how-it-works" className="hover:text-primary-700">How It Works</Link>
          <Link href="/demo" className="hover:text-primary-700">Demo</Link>
          <Link href="/pricing" className="hover:text-primary-700">Pricing</Link>
          <Link href="/testimonials" className="hover:text-primary-700">Testimonials</Link>
          <Link href="/contact" className="hover:text-primary-700">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
