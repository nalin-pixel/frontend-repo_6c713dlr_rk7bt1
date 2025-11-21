export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Smart Krishi • Made for Indian farmers</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-green-700">Twitter</a>
          <a href="#" className="hover:text-green-700">Instagram</a>
          <a href="#" className="hover:text-green-700">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
