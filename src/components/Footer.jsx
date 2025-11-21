export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800/60 bg-slate-900/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-blue-200/80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Smart Krishi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://vercel.com" target="_blank" rel="noreferrer" className="hover:text-white">Vercel</a>
            <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="hover:text-white">Next.js</a>
            <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="hover:text-white">Tailwind</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
