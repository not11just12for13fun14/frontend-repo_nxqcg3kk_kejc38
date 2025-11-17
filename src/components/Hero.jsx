import { useMemo } from 'react'

function Hero() {
  const stats = useMemo(() => ([
    { label: 'Fixed price', value: 'Transparent' },
    { label: 'Avg. completion', value: '14–30 days' },
    { label: 'Client satisfaction', value: '4.9/5' },
  ]), [])

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/20 via-sky-400/10 to-transparent" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 ring-1 ring-blue-600/20 mb-4">Moderní rozvod online</span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Rychlý, dostupný a bez stresu.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Rozvod, který zvládnete online.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Vyřešíme veškeré papírování, připravíme návrhy a provedeme vás celým procesem. Bez zbytečných návštěv úřadů.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                Začít zdarma
              </a>
              <a href="#pricing" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white/80 dark:bg-white/10 dark:text-white text-slate-800 font-semibold ring-1 ring-slate-200 dark:ring-white/10 hover:bg-white transition-colors">
                Ceník a služby
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/60 dark:bg-white/5 ring-1 ring-slate-200/70 dark:ring-white/10 p-4">
                  <div className="text-sm text-slate-500 dark:text-slate-400">{s.label}</div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 ring-1 ring-slate-200 dark:ring-white/10 p-4 shadow-2xl">
              <div className="h-full w-full rounded-xl border border-dashed border-slate-300 dark:border-slate-600 grid place-items-center text-center px-6">
                <div>
                  <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">Ukázka dokumentů</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Návrh na rozvod • Dohoda o dětech • Majetkové vypořádání</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Vše připravíme a doručíme včetně instrukcí pro podání.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
