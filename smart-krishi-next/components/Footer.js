export default function Footer(){
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:flex md:items-center md:justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Smart Krishi. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" aria-label="Twitter" className="hover:text-primary-700">Twitter</a>
          <a href="#" aria-label="YouTube" className="hover:text-primary-700">YouTube</a>
          <a href="#" aria-label="WhatsApp" className="hover:text-primary-700">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
