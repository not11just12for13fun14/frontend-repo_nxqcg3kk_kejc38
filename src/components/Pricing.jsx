function Pricing() {
  const plans = [
    {
      name: 'Základní',
      price: '5 900 Kč',
      perks: [
        'Návrh na rozvod',
        'Základní konzultace',
        'Instrukce pro podání',
      ],
    },
    {
      name: 'Komplet',
      price: '9 900 Kč',
      highlighted: true,
      perks: [
        'Vše ze Základního',
        'Dohoda o dětech / majetku',
        'Prioritní zpracování',
      ],
    },
    {
      name: 'Individuální',
      price: 'Na dotaz',
      perks: [
        'Složitější případy',
        'Advokátní zastoupení',
        'Osobní konzultace',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Ceník</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={(p.highlighted ? 'ring-blue-500/40 shadow-blue-600/10 ' : '') + 'rounded-2xl bg-white/70 dark:bg-white/5 ring-1 ring-slate-200/70 dark:ring-white/10 p-6 shadow-sm'}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                <span className="text-2xl font-bold text-blue-600">{p.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={"mt-6 inline-flex w-full justify-center items-center px-4 py-2 rounded-lg font-semibold transition-colors " + (p.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-900/10') }>
                Vybrat
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
