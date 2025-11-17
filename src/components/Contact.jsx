import { useState } from 'react'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Chyba při odesílání formuláře')
      setStatus({ type: 'success', message: 'Děkujeme! Ozveme se co nejdříve.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Nezávazná konzultace zdarma</h2>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white/70 dark:bg-white/5 ring-1 ring-slate-200/70 dark:ring-white/10 p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Jméno a příjmení</label>
              <input name="full_name" required className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900/60 ring-1 ring-slate-300 dark:ring-white/10 text-slate-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">E-mail</label>
              <input type="email" name="email" required className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900/60 ring-1 ring-slate-300 dark:ring-white/10 text-slate-900 dark:text-white" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Telefon</label>
              <input name="phone" className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900/60 ring-1 ring-slate-300 dark:ring-white/10 text-slate-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Město</label>
              <input name="city" className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900/60 ring-1 ring-slate-300 dark:ring-white/10 text-slate-900 dark:text-white" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Typ případu</label>
              <select name="case_type" className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900/60 ring-1 ring-slate-300 dark:ring-white/10 text-slate-900 dark:text-white">
                <option value="amicable">Dohodou</option>
                <option value="contested">Spor</option>
                <option value="property-settlement">Majetek</option>
                <option value="child-custody">Děti</option>
                <option value="other">Jiné</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Preferovaný čas pro kontakt</label>
              <input name="preferred_time" className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900/60 ring-1 ring-slate-300 dark:ring-white/10 text-slate-900 dark:text-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Vaše zpráva</label>
            <textarea name="message" rows="4" className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900/60 ring-1 ring-slate-300 dark:ring-white/10 text-slate-900 dark:text-white" />
          </div>
          {status && (
            <div className={(status.type === 'success' ? 'bg-green-500/10 text-green-700 ring-green-600/20' : 'bg-red-500/10 text-red-700 ring-red-600/20') + ' text-sm px-3 py-2 rounded-lg ring-1'}>
              {status.message}
            </div>
          )}
          <div className="flex justify-end">
            <button disabled={loading} className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">
              {loading ? 'Odesílání…' : 'Odeslat'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
