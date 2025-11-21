import { useRef, useState } from 'react'

export default function CameraDemo({ t, lang }) {
  const fileRef = useRef(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const onFile = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setLoading(true)
    try {
      // Use local mock endpoint for preview
      const form = new FormData()
      form.append('image', file)
      const res = await fetch('/api/detect-disease-demo', { method: 'POST', body: form })
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setResult({ error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-14 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">{t({ en: 'Disease Detection (Demo)', hi: 'रोग पहचान (डेमो)' }, lang)}</h2>
        <div className="rounded-xl border border-blue-400/20 bg-slate-900/60 p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={onFile}
              className="block w-full text-sm text-blue-200/90 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
            {loading && <span className="text-blue-200">{t({ en: 'Analyzing...', hi: 'विश्लेषण जारी...' }, lang)}</span>}
          </div>
          {result && (
            <pre className="mt-4 text-xs bg-slate-800/80 p-3 rounded-lg overflow-auto max-h-64">{JSON.stringify(result, null, 2)}</pre>
          )}
        </div>
      </div>
    </section>
  )
}
