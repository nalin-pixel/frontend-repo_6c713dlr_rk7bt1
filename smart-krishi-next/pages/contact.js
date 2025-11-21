export default function Contact({ lang = 'en' }) {
  const t = (en, hi) => (lang === 'hi' ? hi : en)
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <form className="bg-white p-6 rounded-lg border grid gap-3 max-w-xl">
        <input placeholder={t('Name', 'नाम')} className="border rounded px-3 py-2" />
        <input placeholder={t('Phone', 'फोन')} className="border rounded px-3 py-2" />
        <input placeholder={t('Village', 'गांव')} className="border rounded px-3 py-2" />
        <textarea placeholder={t('Message', 'संदेश')} className="border rounded px-3 py-2" />
        <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded">{t('Submit', 'जमा करें')}</button>
        <a href="https://wa.me/1234567890" className="text-center px-4 py-2 bg-emerald-600 text-white rounded">{t('WhatsApp', 'व्हाट्सएप')}</a>
      </form>
    </div>
  )
}
