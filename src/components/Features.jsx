function Features() {
  const features = [
    {
      title: 'Kompletní zajištění',
      desc: 'Připravíme veškeré dokumenty a poskytneme návod krok za krokem.',
    },
    {
      title: 'Pevná cena',
      desc: 'Transparentní ceník bez skrytých poplatků.',
    },
    {
      title: 'Rychlé zpracování',
      desc: 'Nejčastěji do 14–30 dnů od dodání podkladů.',
    },
    {
      title: 'Online komunikace',
      desc: 'Vše zvládnete z domova – konzultace, dokumenty i platby.',
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white/70 dark:bg-white/5 ring-1 ring-slate-200/70 dark:ring-white/10 p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
